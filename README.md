# Как запустить проект

1) Создать телеграм бота через @BotFather командой /newbot и получить BOT_TOKEN
2) Вставить ваш токен вместо моего в backend/.env для переменной BOT_TOKEN
3) Установить ngrok (windows: https://ngrok.com/download -> windows -> download zip). Распаковать ngrok в кореную папку проекта (там, где лежат папки backend и фронтенд).
4) Открыть папку с проектом и перейти в только что созданную папку ngrok (там будет лежать файл ngrok.exe). Открыть терминал в этой папке. Зажимаем shift, тыкаем правой кнопкой по пустом месту в папке и выбираем открыть powershell/Терминал 
в этой папке.
5) Запустить ngrok. Будучи в терминале в директории с ngrok.exe, пишем ./ngrok.exe http 8000
6) ![image](https://github.com/afarut/payment_system/assets/61409768/c7daca43-b4b7-4315-bddc-97cea2ebd53b)
7) Копируем то, что выделено белым
8) Вставить ваш host вместо моего в backend/.env для переменной HOST (ВАЖНО: БЕЗ https://)
9) Установить nodejs (https://nodejs.org/en) большая зеленая кнопка Download
10) Установить питон. (https://www.python.org/ftp/python/3.10.11/python-3.10.11-amd64.exe). **ДОБАВИТЬ В PATH**
11) заходим в папку с проектом и переходим в папку frontend. открываем терминал (такими же махинациями как в п.4) и пишем ```npm i```. Дальше пишем ```npm run start```
12) заходим в папку с проектом и переходим в папку backend. открываем терминал (такими же махинациями как в п.4) и пишем ```python -m venv venv```. Дальше пишем ```venv/Scripts/activate```, после пишем ```py manage.py migrate```, после пишем
```py manage.py createsuperuser```. создаем админа. не забываем логин и пароль. последняя команда ```py manage.py runserver```
13) Таким образом, у нас должно быть открыто 2 терминала и там в обоих должна быть какая то залупень непонятная
14) переходим в браузер, открываем http://localhost:3000 и пользуемся.
15) чтобы зайти в админку джанги, мы идем в http://localhost:8000/admin туда вводим логин и пароль от админки, который записали в п.12 и радуемся
16) необходимо зайти во вкладку Cards и добавить новую карту с которой и будут происходить все махинации

## После всех этих настроек сайт готов к использованию
