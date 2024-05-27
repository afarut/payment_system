from django.urls import path
from core import views

app_name = "core"

urlpatterns = [
    path('session/', views.SessionCreateAPIView.as_view(), name='awd'),
    path('userdata/', views.UserDataSerialazerCreateApiView.as_view(), name='aw'),
] 