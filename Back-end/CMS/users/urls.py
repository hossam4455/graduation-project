from django.urls import path
from .views import UserApi,FeedbackListView, FeedbackDetailView

urlpatterns = [
    path("<int:pk>/" , UserApi.as_view(),name="userApi"),
    path('feedbacks/', FeedbackListView.as_view(), name='feedback-list'),
    path('feedbacks/<int:feedback_id>/', FeedbackDetailView.as_view(), name='feedback-detail'),

    


    # path('check_albums/', check_albums, name='check_albums'),
]