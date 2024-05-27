import string
import random


def session_value_genereate(size=80):
	chars = string.ascii_uppercase + string.digits
	return ''.join(random.choice(chars) for _ in range(size))