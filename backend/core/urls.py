from django.urls import path
from core import views

app_name = "core"

urlpatterns = [
    path('pay/', views.pay, name='awd'),
    path("", views.index, name="index"),
]