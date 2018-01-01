#!/bin/bash
cd /home/ubuntu/itaigi/server-side/
source venv/bin/activate
#exec pip freeze
exec celery -A itaigi worker -l info
