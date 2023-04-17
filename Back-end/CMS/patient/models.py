from django.db import models

# Create your models here.
class Patient(models.Model):
    patient_name=models.CharField(max_length=200,blank=True)
   