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
from .serializers import  RegisterSerializer, LoginSerializer,UserSerializer,sigSerializer,VerifyAccountSerializer
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
from rest_framework.response import Response
from .emails import *
# Create your views here.


class RegisterAPI(APIView):
    def post(self, request):
        try:
            data = request.data
            serializer = RegisterSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                send_otp_via_email(serializer.data['email'])
                return Response({
                    'status': 200,
                    'message': "registration successful, check mail",
                    'data': serializer.data
                })
            return Response({
                'status': 400,
                'message': "FAILED",
                'data': serializer.errors
            })
        except Exception as e:
            print(e)


class VerifyOTP(APIView):
    def post(self, request):
        try:
            data = request.data
            serializer = VerifyAccountSerializer(data=data)

            if serializer.is_valid():
                email = serializer.data['email']
                otp = serializer.data['otp']
                user = CustomUser.objects.filter(email=email)
                if not user.exists():
                    return Response({
                        'status': 400,
                        'message': "FAILED",
                        'data': 'invalid email'
                    })

                if not user[0].otp == otp:
                    return Response({
                        'status': 400,
                        'message': "FAILED",
                        'data': 'invalid OTP'
                    })

                user = user.first()
                user.is_verified = True
                user.save()

                return Response({
                    'status': 200,
                    'message': 'account verified',
                    'data': {}
                })

        except Exception as e:
            print(e)
        
        
class RegisterView(generics.ListCreateAPIView):
      queryset = CustomUser.objects.all()
      serializer_class = RegisterSerializer



class SignInAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer
  
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        
        if not user.is_verified:
            return Response({
                'status': 400,
                'message': "FAILED",
                'data': 'User is not verified'
            })
        
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


