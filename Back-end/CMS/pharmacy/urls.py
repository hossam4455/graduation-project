from django.urls import path
from .views import PharmacyListView, PharmacyDetailView
from .views import UserCardListView, UserCardDetailView


urlpatterns = [
    path('pharmacies/', PharmacyListView.as_view(), name='pharmacy_list'),
    path('pharmacies/<int:pk>/', PharmacyDetailView.as_view(), name='pharmacy_detail'),
    path('user-cards/', UserCardListView.as_view(), name='user_card_list'),
    path('user-cards/<int:pk>/', UserCardDetailView.as_view(), name='user_card_detail'),
]