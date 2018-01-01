#!/bin/bash
cd /home/ubuntu/itaigi/server-side/
source venv/bin/activate
exec celery -A itaigi beat -l info
