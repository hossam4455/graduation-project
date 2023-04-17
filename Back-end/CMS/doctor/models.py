from django.db import models

# Create your models here.
class Doctor(models.Model):
    doctor_name=models.CharField(max_length=200,blank=True)
    department=models.CharField(max_length=200,blank=True)