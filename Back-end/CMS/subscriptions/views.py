import datetime

import stripe
from django.conf import settings
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView
from users.models import CustomUser
from rest_framework.response import Response
from rest_framework.views import APIView
from decimal import Decimal
from .models import Price, Subscription

stripe.api_key = settings.STRIPE_SECRET_KEY


class LandingPageView(TemplateView):
    template_name = "landing.html"

    def get_context_data(self, **kwargs):
        subscription = Subscription.objects.get(name="Test Subscription2")
        prices = Price.objects.filter(subscription=subscription)
        context = super(LandingPageView, self).get_context_data(**kwargs)
        context.update({"subscription": subscription, "prices": prices})
        return context


# class CreateCheckoutSessionView(APIView):
#     def post(self, request, *args, **kwargs):
#         domain = settings.WEB_ROOT_URL
#         checkout_session = stripe.checkout.Session.create(
#             payment_method_types=["card"],
#             line_items=[
#                 {
#                     "price": "price_1MFIw5HEVemImVCZHPVRy2Y1",
#                     "quantity": 1,
#                 },
#             ],
#             mode="payment",
#             success_url=domain + "/success/",
#             cancel_url=domain + "/cancel/",
#         )
#         print(checkout_session.url)
#         return Response(checkout_session.url)
class CreateCheckoutSessionView(APIView):
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [TokenAuthentication]
    # domain = settings.WEB_ROOT_URL
    def post(self, request, *args, **kwargs):
        # redirect_to_game = request.data["redirect_to_game"]
        USD = Decimal(request.data["USD"])
        USD = round(USD, 2)
        USD_in_cent = int(USD * 100)
        domain="google.com"
        success_url = domain + f"/profile?billing=true&billing_added={USD}"
        cancel_url = domain + "/profile?billing=true"
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    # Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    "price_data": {
                        "currency": "usd",
                        "unit_amount": USD_in_cent,
                        "product_data": {
                            "name": "USD",
                            "description": f"Add {USD}$ to your Account Balance on teamupsocial.com.",
                        },
                    },
                    "quantity": 1,
                },
            ],
            mode="payment",
            success_url=success_url,
            cancel_url=cancel_url,
            # client_reference_id=request.user.id,
        )
        return Response({"stripe_link": checkout_session.url})

class SuccessView(TemplateView):
    template_name = "success.html"


class CancelView(TemplateView):
    template_name = "cancel.html"


@csrf_exempt
def stripe_webhook(request):
    payload = request.body
    sig_header = request.META["HTTP_STRIPE_SIGNATURE"]
    event = None

    try:
        event = stripe.Webhook.construct_event(payload, sig_header, settings.STRIPE_WEBHOOK_SECRET)
    except ValueError:
        # Invalid payload
        return HttpResponse(status=400)
    except stripe.error.SignatureVerificationError:
        # Invalid signature
        return HttpResponse(status=400)

    # Handle the checkout.session.completed event
    if event["type"] == "checkout.session.completed":
        session = event["data"]["object"]
        customer_email = session["customer_details"]["email"]
        user = CustomUser.objects.get(email=customer_email)
        user.subscription = datetime.datetime.now().date() + datetime.timedelta(365)
        user.save()

    return HttpResponse(status=200)
