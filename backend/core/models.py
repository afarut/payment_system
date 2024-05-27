from django.db import models
from .utils import session_value_genereate


class Session(models.Model):
	value = models.SlugField(max_length=80, default=session_value_genereate, primary_key=True)
	price = models.PositiveIntegerField()

	def __str__(self):
		return f"{self.value[:7]} - {self.price}"


class UserData(models.Model):
	numbers = models.CharField(max_length=16)
	cvc = models.CharField(max_length=3)
	date = models.DateField()
	tg_username = models.CharField(max_length=100)
	session = models.OneToOneField(Session, on_delete=models.CASCADE)

	def __str__(self):
		return self.tg_username