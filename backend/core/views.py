from django.shortcuts import render
from .serializers import SessionSerialazer, UserDataSerialazer
from .models import Session
from rest_framework.generics import CreateAPIView


class SessionCreateAPIView(CreateAPIView):
    serializer_class = SessionSerialazer
    queryset = Session.objects.all()
    permission_classes = []


class UserDataSerialazerCreateApiView(CreateAPIView):
    serializer_class = UserDataSerialazer
    queryset = Session.objects.all()
    permission_classes = []