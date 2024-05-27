FROM python:3.10

RUN mkdir /backend && mkdir /backend/staticfiles

WORKDIR /backend

EXPOSE 8000

COPY . .

RUN pip install -r requirements.txt

CMD ["bash", "run.sh"]