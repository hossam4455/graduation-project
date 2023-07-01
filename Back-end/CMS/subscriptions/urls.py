from django.urls import path

from .views import CreateCheckoutSessionView

app_name = "subscriptions"
urlpatterns = [
    path(
        "create-checkout-session/",
        CreateCheckoutSessionView.as_view(),
        name="create-checkout-session",
    ),
]
