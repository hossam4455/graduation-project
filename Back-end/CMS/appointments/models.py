from django.db import models
from users.models import CustomUser

class Appointment(models.Model):
    doctor = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='doctor_appointments',
        limit_choices_to={'role': 'doctor'}
    )
    patient = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='patient_appointments',
        limit_choices_to={'role': 'patient'}
    )
    appointment_datetime = models.DateTimeField()

    def __str__(self):
        return self.doctor.doctor_name
class Approvement(models.Model):
    doctor = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='doctor_appointments_approvement',
        limit_choices_to={'role': 'doctor'}
    )
    patient = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='patient_appointments_approvement',
        limit_choices_to={'role': 'patient'}
    )
    appointment_datetime = models.DateTimeField()

 
class Feedback(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name