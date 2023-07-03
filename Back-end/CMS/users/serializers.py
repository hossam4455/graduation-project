
import email
from rest_framework import serializers

from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from users.models import CustomUser ,Question

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email','bio','doctor_name','department','cost','address','image','password1', 'password2')


from .models import Feedback

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ['id', 'doctor', 'patient', 'rating', 'comment']


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'