from django.db import models
from phone_field import PhoneField
from address.models import AddressField
from django.core.exceptions import ValidationError
# Create your models here.
class Doctor(models.Model):
    doctor_name=models.CharField(max_length=200,blank=True)
    department=models.CharField(max_length=200,blank=True)
    cost = models.FloatField(blank=True,null=True)
    image = models.ImageField(null=False,blank= True)
    address= models.CharField("Address line 1",max_length=1024,)
    def __str__(self):
        return self.doctor_name
 
 
    
    def clean(self):
        if self.cost == None:pass
        else:
            if type(self.cost) == float and self.cost < 1:
                raise ValidationError({"Cost": ('Please enter value more than zero'), })