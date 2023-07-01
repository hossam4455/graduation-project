from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Pharmacy,UserCard
from .serializers import PharmacySerializer,UserCardSerializer


# end point for pharmacy 

class PharmacyListView(APIView):
    def get(self, request):
        pharmacies = Pharmacy.objects.all()
        serializer = PharmacySerializer(pharmacies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PharmacySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class PharmacyDetailView(APIView):
    def get(self, request, pk):
        try:
            pharmacy = Pharmacy.objects.get(pk=pk)
            serializer = PharmacySerializer(pharmacy)
            return Response(serializer.data)
        except Pharmacy.DoesNotExist:
            return Response({'error': 'Pharmacy not found'}, status=404)

    def put(self, request, pk):
        try:
            pharmacy = Pharmacy.objects.get(pk=pk)
            serializer = PharmacySerializer(pharmacy, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=400)
        except Pharmacy.DoesNotExist:
            return Response({'error': 'Pharmacy not found'}, status=404)



# end point for user card 

class UserCardListView(APIView):
    def get(self, request):
        user_cards = UserCard.objects.all()
        serializer = UserCardSerializer(user_cards, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserCardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class UserCardDetailView(APIView):
    def get(self, request, pk):
        try:
            user_card = UserCard.objects.get(pk=pk)
            serializer = UserCardSerializer(user_card)
            return Response(serializer.data)
        except UserCard.DoesNotExist:
            return Response({'error': 'User Card not found'}, status=404)

    def put(self, request, pk):
        try:
            user_card = UserCard.objects.get(pk=pk)
            serializer = UserCardSerializer(user_card, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=400)
        except UserCard.DoesNotExist:
            return Response({'error': 'User Card not found'}, status=404)
