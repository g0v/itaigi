FROM python:3.5
MAINTAINER sih4sing5hong5

RUN pip3 install https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_phing5-tai5/archive/master.zip
RUN apt-get update && \
  apt-get install -y  zlib1g-dev libffi-dev libxml2-dev libxslt1-dev
  

WORKDIR /opt
RUN pip3 install gunicorn whitenoise
COPY . .
