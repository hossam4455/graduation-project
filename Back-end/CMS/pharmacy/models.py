from django.db import models
from django.apps import apps
from users.models import CustomUser
# Create your models here.

class Pharmacy(models.Model):
    
    image=models.ImageField(null=False,blank= True)
    name=models.CharField(max_length=100,blank=False)
    price=models.CharField(max_length=100,blank=False)



class UserCard(models.Model):
    patient_name=models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=False)
    name=models.CharField(max_length=100,blank=False)
    price=models.CharField(max_length=100,blank=False)

