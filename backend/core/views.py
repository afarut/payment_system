from django.shortcuts import render
from .serializers import CommentSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Card, Transaction


import json
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .utils import proceed_update
from asgiref.sync import async_to_sync


@csrf_exempt
def index(request):
    print(request)
    try:
        async_to_sync(proceed_update)(request)
    except Exception as e:
        print(e)
    return JsonResponse({})


@api_view(['GET', 'POST'])
def pay(request):
	print(request.data, type(json.dumps(request.data)))
	data = CommentSerializer(data=json.loads(json.dumps(request.data)))
	if data.is_valid():
		all_cards = Card.objects.all()
		data = data.data
		for card in all_cards:
			if card.date == data["date"] and card.cvc == data["cvc"] and card.numbers == data["numbers"]:
				curr_card = Card.objects.get(numbers=data["numbers"])
				Transaction.objects.create(card=curr_card, price=data["price"])
				return Response({"status": "ok"}) 
		else:
			return Response({"erorr": "Данных в базе не найдено", "error_list": False})
		data.data[""]
	errors = json.loads(json.dumps(data.errors))
	errors["erorr_list"] = True
	return Response(errors)