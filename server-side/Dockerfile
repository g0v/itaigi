FROM sih4sing5hong5/tai5-uan5_gian5-gi2_phing5-tai5
MAINTAINER sih4sing5hong5

RUN apt-get update && \
  apt-get install -y locales python3 python3-pip python3-dev zlib1g-dev libffi-dev libxml2-dev libxslt1-dev rabbitmq-server # 為了編譯, 連google oauth2, message queue

WORKDIR /opt
COPY . .
RUN python manage.py migrate
RUN python manage.py collectstatic --no-input
RUN echo RABBIT_MQ_TSU2_KI1 = \'rabbitmq\' >> hok8_bu7/settings.py


RUN echo 'from 佳怡表匯入資料庫 import 走 ; 走()' | python3 manage.py shell
RUN echo 'from 匯入台華 import 走台華 ; 走台華()' | python3 manage.py shell
RUN echo 'from 匯入寶島可夢 import 走寶島可夢 ; 走寶島可夢()' | python3 manage.py shell
RUN echo 'from 匯入glll4678外來詞 import 走匯外來詞 ; 走匯外來詞()' | python3 manage.py shell

