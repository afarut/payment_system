from rest_framework import serializers
from .models import Session, UserData


class SessionSerialazer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = "__all__"
        extra_kwargs = {
            "value": {'read_only': True},
        }


class UserDataSerialazer(serializers.ModelSerializer):
    class Meta:
        model = UserData
        fields = "__all__"
        extra_kwargs = {
            "id": {'read_only': True},
        }