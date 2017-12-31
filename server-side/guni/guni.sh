#!/bin/bash
cd /home/ubuntu/itaigi/server-side/
source venv/bin/activate
python manage.py collectstatic --no-input
exec gunicorn itaigi.wsgi:application -c gunicorn.conf.py
