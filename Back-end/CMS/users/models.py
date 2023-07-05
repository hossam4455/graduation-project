from tokenize import blank_re
from django.db import models
from django.contrib.auth.models import AbstractUser, Permission
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth import get_user_model


# Create your models here.
class CustomUser(AbstractUser):
    ROLES = [
        ('doctor', 'Doctor'),
        ('patient', 'Patient'),
    ]
    role = models.CharField(max_length=10, choices=ROLES, blank=True)
    username=models.CharField(max_length=255,null=False,unique=True,blank=False)
    email=models.CharField(max_length=255,unique=True,blank=False)
    password1=models.CharField(max_length=255,null=True,blank=False)
    password2=models.CharField(max_length=255,null=True,blank=False)
    bio = models.CharField(max_length=256,blank = True, null=True, default="")
    doctor_name=models.CharField(max_length=200,blank=True)
    department=models.CharField(max_length=200,blank=True)
    cost = models.FloatField(blank=True,null=True)
    image = models.ImageField(null=False,blank= True)
    address= models.CharField("Address line 1",max_length=1024,)
    otp=models.CharField(max_length=6,null=True,blank=True)
    is_verified=models.BooleanField(default=False)
    def __str__(self):
     return str(self.username)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []
    

class Feedback(models.Model):
    doctor = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='doctor_fedback',
        limit_choices_to={'role': 'doctor'}
    )
    patient = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='patient_feedback',
        limit_choices_to={'role': 'patient'}
    )
   
    rating = models.IntegerField(choices=[(i, str(i)) for i in range(1, 6)])
    comment = models.TextField()

    def __str__(self):
        return f"Feedback for {self.doctor} by {self.patient}"

class Question(models.Model):
    doctor = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='received_questions',
        limit_choices_to={'role': 'doctor'}
    )
    patient = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='asked_questions',
        limit_choices_to={'role': 'patient'}
    )
    question_text = models.TextField()
    answer_text = models.TextField(blank=True, null=True)
    is_answered = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Question from {self.patient}"

    def answer(self, answer_text):
        self.answer_text = answer_text
        self.is_answered = True
        self.save()

class Buy(models.Model):
    prescription = models.CharField(max_length=100)
    doctor = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='prescription_doctor',
        limit_choices_to={'role': 'doctor'}
    )
    patient = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='patient_doctor',
        limit_choices_to={'role': 'patient'}
    )
class Test(models.Model):
    prescription = models.CharField(max_length=100)
    doctor = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='test_doctor',
        limit_choices_to={'role': 'doctor'}
    )
    patient = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='test_patient',
        limit_choices_to={'role': 'patient'}
    )