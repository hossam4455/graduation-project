from django.urls import path
from .views import RegisterView,SignInAPI,EmailActivation
app_name = "authentication"


urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login',SignInAPI.as_view()),
    path("activation/<uuid:id>/", EmailActivation.as_view(), name="activation"),

  
]