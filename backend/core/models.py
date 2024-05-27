from django.db import models
#from .utils import session_value_genereate



def session_value_genereate(size=80):
	chars = string.ascii_uppercase + string.digits
	return ''.join(random.choice(chars) for _ in range(size))


class Card(models.Model):
	numbers = models.CharField(max_length=16, primary_key=True)
	cvc = models.CharField(max_length=3)
	date = models.CharField(max_length=10)
	balance = models.PositiveIntegerField(default=100)

	def __str__(self):
		return str(self.numbers)


class Transaction(models.Model):
	card = models.ForeignKey(Card, on_delete=models.CASCADE)
	price = models.PositiveIntegerField()
	is_payed = models.BooleanField(default=False)
	is_prottect = models.BooleanField(default=False)

	def __str__(self):
		return f"{self.card} - {self.price} - {self.is_payed}"