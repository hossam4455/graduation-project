from django.db import models
from phone_field import PhoneField
# Create your models here.
class Patient(models.Model):
    patient_name=models.CharField(max_length=200,blank=True)
    phone_number = PhoneField(blank=True, help_text='Contact phone number')