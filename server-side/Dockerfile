FROM ubuntu:18.04
MAINTAINER sih4sing5hong5

RUN apt-get update && \
  apt-get install -y locales python3 python3-pip python3-dev zlib1g-dev libffi-dev libxml2-dev libxslt1-dev rabbitmq-server # 為了編譯, 連google oauth2, message queue

RUN pip3 install --upgrade pip
RUN locale-gen zh_TW.UTF-8
ENV LANG zh_TW.UTF-8
ENV LC_ALL zh_TW.UTF-8


WORKDIR /opt
COPY . .
RUN pip3 install -r requirements.txt
RUN python3 manage.py migrate

RUN echo 'from 佳怡表匯入資料庫 import 走 ; 走()' | python3 manage.py shell
RUN echo 'from 匯入台華 import 走台華 ; 走台華()' | python3 manage.py shell
RUN echo 'from 匯入寶島可夢 import 走寶島可夢 ; 走寶島可夢()' | python3 manage.py shell
RUN echo 'from 匯入glll4678外來詞 import 走匯外來詞 ; 走匯外來詞()' | python3 manage.py shell

