from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import AppointmentSerializer,ApprovementSerializer
from .models import Appointment,Approvement
from rest_framework import generics, permissions, serializers
from rest_framework import generics
from django.conf import settings
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.authentication import SessionAuthentication, BasicAuthentication

# class AppointmentView(generics.ListCreateAPIView):
#       queryset = Appointment.objects.all()
#       serializer_class = AppointmentSerializer
class AppointmentView(APIView):
    def get(self, request):
        appointments = Appointment.objects.all()
        serializer = AppointmentSerializer(appointments, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = AppointmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    
class ApprovementView(APIView):
    def get(self, request):
        approvement = Approvement.objects.all()
        serializer = ApprovementSerializer(approvement, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ApprovementSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)   

class ApprovementDetailView(generics.RetrieveDestroyAPIView):
    queryset = Approvement.objects.all()
    serializer_class = ApprovementSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    
class AppointmentDetailView(generics.RetrieveDestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]