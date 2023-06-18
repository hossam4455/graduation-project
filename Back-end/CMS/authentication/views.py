from lib2to3.pgen2 import token
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .serializers import RegisterSerializer
from users.models import CustomUser
import jwt, datetime
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework import generics, permissions, serializers
from rest_framework import generics
from knox.views import LoginView as KnoxLoginView
from knox.models import AuthToken
from rest_framework.authentication import BasicAuthentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from .serializers import  RegisterSerializer, LoginSerializer,UserSerializer,sigSerializer
from knox.auth import TokenAuthentication
from .models import User
from django.utils import timezone
from rest_framework import status
from django.contrib.auth.signals import user_logged_in, user_logged_out
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404
from django.views.generic import TemplateView
from users.models import CustomUser
from django.core.exceptions import ObjectDoesNotExist
from django.core.mail import send_mail
from django.conf import settings
# Create your views here.
class RegisterViewSendMail(APIView):
   def post(self, request):
       serializer = UserSerializer(data=request.data)
       serializer.is_valid(raise_exception=True)
       serializer.save()
       CustomUser = serializer.validated_data["CustomUser"]
       CustomUser.is_active = False
       CustomUser.save()
       send_mail(
            "worklog.click (email verfication)",
            str(settings.WEB_ROOT_URL) + "/authentication/activation/" + str(CustomUser.uuid) + "/",
            settings.EMAIL_HOST_USER,
            [CustomUser.email],
        )
       return Response(
            {
                "user": UserSerializer(CustomUser, context=self.get_serializer_context()).data,
            }
        )

       return Response(serializer.data)

class RegisterView(generics.ListCreateAPIView):
      queryset = CustomUser.objects.all()
      serializer_class = RegisterSerializer
class SignInAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer
  
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token = "!!!!"
        try:
            token = Token.objects.get(user_id=user.id)
        except Token.DoesNotExist:
            token = Token.objects.create(user_id=user.id)
      
        return Response({
            "user": sigSerializer(user).data,
            "token": str(token),
        
        })
class EmailActivation(APIView):
    serializer_class = None
    permission_classes = (permissions.AllowAny,)

    def post(self, request, id):
        try:
            user = User.objects.get(uuid=id)
            user.is_active = True
            user.save()
        except ObjectDoesNotExist:
            return HttpResponse(status=404)
        send_mail("worklog.click (email verfication)", "your email is verified", settings.EMAIL_HOST_USER, [user.email])
        return HttpResponse(status=200)


class ActivationSuccessView(TemplateView):
    template_name = "activationsuccess.html"
