import string
import random


def session_value_genereate(size=80):
	chars = string.ascii_uppercase + string.digits
	return ''.join(random.choice(chars) for _ in range(size))


import json
from aiogram import types, Bot, Dispatcher
from django.http import HttpRequest, HttpResponse
from core.bot import bot, dp


async def proceed_update(req: HttpRequest):
    upd = types.Update(**(json.loads(req.body)))
    Dispatcher.set_current(dp)
    Bot.set_current(bot)
    await dp.process_update(upd)