from rest_framework import serializers
from .models import Pharmacy,UserCard

class PharmacySerializer(serializers.ModelSerializer):
    class Meta:
        model = Pharmacy

        fields=('image','name','price')



class UserCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCard
        fields = '__all__'