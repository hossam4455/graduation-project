from dataclasses import fields
from pyexpat import model
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import serializers


from patient.models import Patient

    
class PatientSerializer(serializers.ModelSerializer):
   
    class Meta:
        model=Patient
        fields=('patient_name','phone_number','appointment_datetime','doctor_name','appointment_time')
        
