from rest_framework import serializers

class CommentSerializer(serializers.Serializer):
    telegram_id = serializers.CharField(max_length=30)
    price = serializers.IntegerField()

    name = serializers.CharField(max_length=200)
    cvc = serializers.CharField(min_length=3, max_length=3)
    date = serializers.CharField()
    numbers = serializers.CharField(max_length=16, min_length=16)