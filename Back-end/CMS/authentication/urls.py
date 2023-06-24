from django.urls import path
from .views import RegisterView,SignInAPI,EmailActivation,RegisterView,VerifyOTP,RegisterAPI,RegisterAPI
app_name = "authentication"


urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login',SignInAPI.as_view()),
    path('registerotp', RegisterAPI.as_view()),
    path("verify/", VerifyOTP.as_view(), name="activation"),

  
]