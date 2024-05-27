import string
import random
import requests
from django.conf import settings




import json
from aiogram import types, Bot, Dispatcher
from django.http import HttpRequest, HttpResponse
from core.bot import bot, dp


async def proceed_update(req: HttpRequest):
    upd = types.Update(**(json.loads(req.body)))
    Dispatcher.set_current(dp)
    Bot.set_current(bot)
    await dp.process_update(upd)


def SendMessage(chat_id, id):
    parse_mode = "HTML"
    text = "Подтвердите оплату"
    reply_markup = json.dumps({'inline_keyboard':[[{"text":"Подтверждаю","callback_data": str(id)}]]})
    data={'chat_id': chat_id, 'text': text, 'parse_mode': parse_mode, 'reply_markup': reply_markup}
    return requests.post(url="https://api.telegram.org/bot"+settings.BOT_TOKEN+"/sendMessage",data=data).json()