from django.urls import path
from .views import AppointmentView
from appointments.views import AppointmentDetailView

urlpatterns = [
    path('appointments/', AppointmentView.as_view(), name='appointments'),
    path('appointments/<int:pk>/', AppointmentDetailView.as_view(), name='appointment-detail'),
]
