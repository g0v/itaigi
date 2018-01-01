# -*- coding: utf-8 -*-
import multiprocessing


bind = ['0.0.0.0:8001']
workers = multiprocessing.cpu_count()*2 + 1
timeout = 90
graceful_timeout = 10
max_requests = 10000
daemon = False
loglevel='debug'
