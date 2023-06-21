from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from users.models import CustomUser
from .serializers import UserSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
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


# from dateutil.relativedelta import relativedelta
# from django.conf import settings

# def send_mail_func(user):
#     if settings.EMAIL_HOST_USER:
#         host_mail = f'name site <{settings.EMAIL_HOST_USER}>'
#     else:
#         host_mail = f'localServer <Admin@localServer.com>'

#     mail_subject = "Hi! Artis"
#     message = "please create album to get more followers"
#     user.email_user(mail_subject, message,  host_mail) 





# def check_between_two_dates(check_date):
#     current_date = datetime.datetime.now().date()

#     add_days = check_date + relativedelta(months=1)
#     if add_days < current_date:
#         return False

#     return True

# def check_albums(): 

#     # context = {
#     #     'test':1
#     # }

#     check_all_users = CustomUser.objects.all()
#     if not check_all_users:
#             # return HttpResponse(context, status=status.HTTP_201_CREATED)
#             return


#     for user in check_all_users:

#         if not user.artist.artist_album.all():
            
#             continue

#         last_album = user.artist.artist_album.all()[0]
#         check = check_between_two_dates(last_album.check_date)
#         if not check:

#             send_mail_func(user)
#             last_album.check_date = datetime.datetime.now().date()
#             last_album.save()
#     # return HttpResponse(context, status=status.HTTP_201_CREATED)
#     return