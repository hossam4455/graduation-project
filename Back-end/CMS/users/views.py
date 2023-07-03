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
from rest_framework import viewsets
from .models import  Question
from .serializers import QuestionSerializer
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

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


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    def perform_create(self, serializer):
        question = serializer.save()
        self.send_realtime_update('question_created', question)

    def perform_update(self, serializer):
        question = serializer.save()
        self.send_realtime_update('question_updated', question)

    def perform_destroy(self, instance):
        question = instance
        instance.delete()
        self.send_realtime_update('question_deleted', question)

    def send_realtime_update(self, action, question):
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            'questions_group',
            {
                'type': 'question_update',
                'action': action,
                'question': QuestionSerializer(question).data
            }
        )

    def reply_to_question(self, request, pk=None):
        try:
            question = self.get_object()
        except Question.DoesNotExist:
            return Response({'error': 'Question not found'}, status=404)
        
        answer_text = request.data.get('answer_text')
        if answer_text is None:
            return Response({'error': 'Answer text is required'}, status=400)
        
        question.answer(answer_text)
        serializer = self.get_serializer(question)
        
        return Response(serializer.data)
    
    def answer(self, answer_text):
        self.instance.answer_text = answer_text
        self.instance.is_answered = True
        self.instance.save()