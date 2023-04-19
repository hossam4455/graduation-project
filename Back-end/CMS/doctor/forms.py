
from dataclasses import fields
from pyexpat import model
from .models import Doctor
from django import forms

class CreatAlbum(forms.ModelForm):
    class Meta:
        model=Doctor
        fields=['doctor_name','department','cost','address','image']