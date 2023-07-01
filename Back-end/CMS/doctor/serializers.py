from dataclasses import fields
from pyexpat import model
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import serializers


from doctor.models import Doctor

    
class DoctorSerializer(serializers.ModelSerializer):
   
    class Meta:
        model=Doctor
        fields=('doctor_name','department','cost','address','image')
        
