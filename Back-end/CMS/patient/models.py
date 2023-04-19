from django.db import models
from phone_field import PhoneField
# Create your models here.
from doctor.models import Doctor

class Patient(models.Model):
    patient_name  = models.CharField(max_length=200,blank=True)
    phone_number = PhoneField(blank=True, help_text='Contact phone number')
    appointment_datetime = models.DateField(null=True)
    doctor_name = models.ForeignKey(Doctor, on_delete=models.CASCADE, null=False, related_name = 'doctor_patient')
    appointment_time  = models.TimeField(auto_now=False, auto_now_add=False,)
    def __str__(self):
        return self.patient_name

    def clean(self):
        if self.Cost == None:pass
        else:
            if type(self.Cost) == float and self.Cost < 1:
                raise ValidationError({"Cost": _('Please enter value more than zero'), })