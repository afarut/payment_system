from django.conf import settings
from aiogram.contrib.fsm_storage.memory import MemoryStorage
from aiogram.contrib.middlewares.logging import LoggingMiddleware
from aiogram import Bot, Dispatcher, types
import logging
from asgiref.sync import sync_to_async


#logging.basicConfig(filename="bot.log", level=logging.DEBUG)
bot = Bot(token=settings.BOT_TOKEN, parse_mode=types.ParseMode.HTML)
dp = Dispatcher(bot, storage=MemoryStorage())
dp.middleware.setup(LoggingMiddleware())



@dp.message_handler(commands=["start"], state="*")
async def bot_echo(message):
    await message.answer(f"Приветствую, ваш id: {message.chat.id}")