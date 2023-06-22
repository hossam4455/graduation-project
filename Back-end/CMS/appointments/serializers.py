from rest_framework import serializers
from .models import Appointment,Approvement

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'
class ApprovementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Approvement
        fields = '__all__'
