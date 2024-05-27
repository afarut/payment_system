from django.conf import settings
from aiogram.contrib.fsm_storage.memory import MemoryStorage
from aiogram.contrib.middlewares.logging import LoggingMiddleware
from aiogram import Bot, Dispatcher, types
import logging
from asgiref.sync import sync_to_async
import json
import requests
from core.models import Transaction


logging.basicConfig(level=logging.DEBUG)
bot = Bot(token=settings.BOT_TOKEN, parse_mode=types.ParseMode.HTML)
dp = Dispatcher(bot, storage=MemoryStorage())
dp.middleware.setup(LoggingMiddleware())


def get_payed(id):
    tr =Transaction.objects.get(id=id)
    if not tr.is_prottect:
    	tr.is_payed = True
    tr.save()


@dp.message_handler(commands=["start"], state="*")
async def bot_echo(message):
    await message.answer(f"Приветствую, ваш id: {message.chat.id}")


@dp.callback_query_handler(lambda call: True)
async def help(call):
    await sync_to_async(get_payed)(call.data)
    await call.message.edit_text("Вы подтвердили оплату", reply_markup=None)