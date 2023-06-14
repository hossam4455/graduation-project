from django.shortcuts import render

# Create your views here.
from tkinter.tix import Form
from cgitb import html
from webbrowser import get
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response

from django.contrib.auth.models import User
from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse, Http404
from .forms import CreatAlbum
from django.contrib.auth.decorators import login_required
from django.views import View
from django.http import HttpResponseRedirect
from django.utils.decorators import method_decorator

from rest_framework import generics
from rest_framework.permissions import IsAdminUser
from django.core.paginator import Paginator
from django.shortcuts import render
from rest_framework.pagination import PageNumberPagination
import django_filters
from django_filters import rest_framework as filters
from rest_framework.permissions import IsAuthenticated
from django.core.mail import send_mail
from .serializers import DoctorSerializer
from rest_framework import viewsets,views
from rest_framework import status
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from .models import Doctor

class DoctorCreat(views.APIView):
    serializer_class = DoctorSerializer
    def get(self, request, *args, **kwargs): 
        doctor=Doctor.objects.all()
       
        data=DoctorSerializer(doctor,many=True).data
        return Response(data)
        
    def post(self, request):
        serializer = DoctorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            serializer.is_valid(raise_exception=True)
            return Response(serializer.data)
        return Response(
            serializer.data,
            status=status.HTTP_400_BAD_REQUSET)


        