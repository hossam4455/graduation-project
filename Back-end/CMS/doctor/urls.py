from django.urls import path

from . import views



urlpatterns = [
 
    path('create/', views.DoctorCreat.as_view(), name='new_doctor'),

  
    
]