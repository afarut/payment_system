from django.urls import path
from core import views

app_name = "core"

urlpatterns = [
    path('pay/', views.pay, name='awd'),
    path("pay_check/<int:id>/", views.pay_check, name="pay_check"),
    path("", views.index, name="index"),
]