from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from users.models import CustomUser
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from django.http import JsonResponse
from django.views import View

from .models import CustomUser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Feedback
from .serializers import FeedbackSerializer
from django.shortcuts import get_object_or_404

class UserApi(APIView):
    
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    # authentication_classes = (BasicAuthentication,)
    # permission_classes = (IsAuthenticated,)
    def get(self, request, pk, *args, **kwargs):
        try:
            user = CustomUser.objects.get(pk=pk)
            return Response(UserSerializer(user).data, status=200)
        except CustomUser.DoesNotExist:
            return Response(status=404, data="User Not Found")

    def put(self, request, pk):
        try:
            user = CustomUser.objects.get(pk=pk)
            serializer = UserSerializer(user, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=200)
            else:
                return Response(serializer.data, status=400)
        except CustomUser.DoesNotExist:
            return Response("User Not Found!", status=404)

    def patch(self, request, pk):
        try:
            user = CustomUser.objects.get(pk=pk)
            serializer = UserSerializer(user, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=200)
            else:
                return Response("Invalid Data!", status=400)
        except CustomUser.DoesNotExist:
            return Response("User Not Found!", status=404)
class FeedbackListView(APIView):
    def get(self, request):
        feedbacks = Feedback.objects.all()
        serializer = FeedbackSerializer(feedbacks, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def post(self, request):
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FeedbackDetailView(APIView):
    def get(self, request, feedback_id):
        feedback = get_object_or_404(Feedback, pk=feedback_id)
        serializer = FeedbackSerializer(feedback)
        return Response(serializer.data)

    def put(self, request, feedback_id):
        feedback = get_object_or_404(Feedback, pk=feedback_id)
        serializer = FeedbackSerializer(feedback, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, feedback_id):
        feedback = get_object_or_404(Feedback, pk=feedback_id)
        feedback.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)