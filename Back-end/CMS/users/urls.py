from django.urls import path
from .views import UserApi,FeedbackListView, FeedbackDetailView
from . import views

from rest_framework import routers
from .views import  QuestionViewSet
from django.urls import path, include
router = routers.DefaultRouter()
app_name = 'users'
router.register(r'questions', QuestionViewSet)

urlpatterns = [
    path("<int:pk>/" , UserApi.as_view(),name="userApi"),
    path('feedbacks/', FeedbackListView.as_view(), name='feedback-list'),
    path('feedbacks/<int:feedback_id>/', FeedbackDetailView.as_view(), name='feedback-detail'),

    path('api/', include(router.urls)),
      path('api/questions/<int:pk>/reply/', views.QuestionViewSet.as_view({'post': 'reply_to_question'}), name='reply_to_question'),
    

    


    # path('check_albums/', check_albums, name='check_albums'),
]+ router.urls