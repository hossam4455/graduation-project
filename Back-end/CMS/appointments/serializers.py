from rest_framework import serializers
from .models import Appointment,Approvement
from rest_framework import serializers
from .models import Feedback

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'
class ApprovementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Approvement
        fields = '__all__'


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'
