from __future__ import absolute_import

import os
from celery import Celery

from django.conf import settings

# set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'itaigi.settings')

mia, bitbe, vhost = ('itaigi',) * 3
tsuki = 'rabbitmq'
rabbitmq = 'amqp://{}:{}@{}:5672/{}'.format(
    mia, bitbe, tsuki, vhost
)

app = Celery('itaigi', backend='amqp', broker=rabbitmq)

# Using a string here means the worker will not have to
# pickle the object when using Windows.
app.config_from_object('django.conf:settings')
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)


@app.task(bind=True)
def debug_task(self):
    print('Request: {0!r}'.format(self.request))
