from django.urls import path
from .views import AppointmentView
from appointments.views import AppointmentDetailView,ApprovementView,ApprovementDetailView

urlpatterns = [
    path('appointments/', AppointmentView.as_view(), name='appointments'),
    path('approvement/', ApprovementView.as_view(), name='approvement'),
    path('appointments/<int:pk>/', AppointmentDetailView.as_view(), name='appointment-detail'),
     path('approvement/<int:pk>/', ApprovementDetailView.as_view(), name='approvement-detail'),
]
