from django.urls import path

from . import views



urlpatterns = [
 
    path('create/', views.PatientCreat.as_view(), name='new_patient'),

  
    
]