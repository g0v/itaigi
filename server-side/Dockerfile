FROM sih4sing5hong5/tai5-uan5_gian5-gi2_phing5-tai5
MAINTAINER sih4sing5hong5

RUN apt-get update && \
  apt-get install -y locales python3 python3-pip python3-dev zlib1g-dev libffi-dev libxml2-dev libxslt1-dev rabbitmq-server # 為了編譯, 連google oauth2, message queue

WORKDIR /opt
RUN pip3 install 'django<2.1'
RUN pip3 install gunicorn whitenoise
RUN pip3 install --upgrade https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_phing5-tai5/archive/thehTiauKianGi.zip
COPY . .
RUN python3 manage.py collectstatic --no-input
#RUN echo 'DEBUG = True' >> itaigi/settings.py

EXPOSE 8000
CMD gunicorn -b 0.0.0.0:8000 \
  --workers 2 --threads 5 \
  --max-requests 1000 \
  --log-level debug \
  itaigi.wsgi


# RUN python3 manage.py migrate
# RUN echo 'from 佳怡表匯入資料庫 import 走 ; 走()' | python3 manage.py shell
# RUN echo 'from 匯入台華 import 走台華 ; 走台華()' | python3 manage.py shell
# RUN echo 'from 匯入寶島可夢 import 走寶島可夢 ; 走寶島可夢()' | python3 manage.py shell
# RUN echo 'from 匯入glll4678外來詞 import 走匯外來詞 ; 走匯外來詞()' | python3 manage.py shell

#CMD gunicorn itaigi.wsgi:application -c gunicorn.conf.py
