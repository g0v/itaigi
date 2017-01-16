<a href="https://itaigi.tw/"><img src="https://itaigi.tw/121c4ed080e9127a72d31ae85d1458fc.svg" width="100"></a>新台語·運動
===========
[![Build Status](https://travis-ci.org/g0v/itaigi.svg?branch=master)](https://travis-ci.org/g0v/itaigi)
[![devDependency Status](https://david-dm.org/g0v/itaigi/dev-status.svg)](https://david-dm.org/g0v/itaigi#info=devDependencies)

* [itaigi網站](http://itaigi.tw)
* [FB粉專](https://www.facebook.com/ukauitaigi/)
* [Slack討論](https://g0v-tw.slack.com/messages/itaigi/)
* [萌典松](http://moe.kktix.cc/)
* [專案Hackpad](https://g0v.hackpad.com/moed7ct-taigi-neologism)
* [API介面](http://docs.tai5uan5gian5gi2phing5thai5.apiary.io/#)
* [正規化工作表](https://docs.google.com/spreadsheets/d/1_sXX2CGJsfSUTg-r-RGc4ApU1fPUmuLc2DmUSy4y_Zk)

### Frontend

Install:

#### Install npm
#### Check node.js version
```bash
$ node -v # version must >4
```

#### update node.js to specific version
```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash && source ~/.nvm/nvm.sh
$ nvm install 6

$ nvm use 6

# Check node.js version again
$ node -v
```

#### Install packages
```bash
$ npm i
```
If you meet some problem during `npm i` and finally succeed, you might need `rm -rf node_modules && npm i`


#### Start development server:

```bash
$ npm start
```
then open <http://localhost:3000/>

#### Coding style
JavaScript Style: [Airbnb](https://github.com/airbnb/javascript)
  - `npm test` 檢查
  - `npm run reformat` 自動重排


#### 佈署試驗機
請揀其中一臺試驗機，注意Pull request有人佇用無
```bash
$ npm run deploy-tshi3
```
對應到<http://tshi3.itaigi.tw/>
```bash
$ npm run deploy-giam7
```
對應到<http://giam7.itaigi.tw/>
```bash
$ npm run deploy-test
```
對應到<http://test.itaigi.tw/>


#### 佈署正式機
```bash
$ npm run deploy
```

#### 產生favicon
1.  共`design/logo正方形.svg`擲去<http://realfavicongenerator.net/>
2. 調顯示的畫面
3. 共產生的`favicons.zip`掠落來
4. 解壓縮佇專案內
5. 用<http://realfavicongenerator.net/favicon_checker>檢查

### 後端
後端的設定較麻煩，若只是要改前端，可以不用架後端，直接用線上機就行。
若需要試新功能，可以改[apiary](http://docs.tai5uan5gian5gi2phing5thai5.apiary.io/#)，並改前端的[後端網址](https://github.com/g0v/itaigi/blob/master/src/App/App.jsx#L14)就可以運作了

#### 環境設定
後端使用[臺灣言語平臺](https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_phing5-tai5)。
環境要求Python 3.4+，並放在`server-side/`資料夾.
以下指令請在`server-side/`裡面執行
```python3
sudo apt-get install -y python3-dev libffi-dev libxml2-dev libxslt1-dev rabbitmq-server # 為了編譯, 連google oauth2, message queue
virtualenv venv --python python3 # 設置環境檔
. venv/bin/activate # 載入環境
pip install -r requirements.txt # 裝相關python套件
python manage.py migrate #建立資料庫欄位
sudo apt-get install -y libav-tools # 安裝avconv for Ubuntu
```
以上即已建立開發用簡單的 sqlite db(/server-side/db.sqlite3)，如欲使用 postgres 請參考[Postgres設定](https://github.com/g0v/itaigi#postgres設定optional)

### 跑服務
需同時開`django`、`celery worker`跟`celery beat`三個服務，可用[screen](https://blog.gtwang.org/linux/screen-command-examples-to-manage-linux-terminals/)

#### 開發用
程式碼若有修改`django`會重新載入，`celery`需重新啟動
```bash
python manage.py runserver
```
```bash
celery -A itaigi worker -l info
celery -A itaigi beat -l info
```

#### 上機用
支援多線程
```bash
gunicorn itaigi.wsgi
celery -A itaigi worker -l info
celery -A itaigi beat -l info
```
可考慮 Process Control System 將 `celery` 跑在系統背景，例如使用 [supervisor](http://supervisord.org/)

#### Postgres設定(optional)
詳情請看臺灣言語資料庫的[使用Postgres](http://tai5-uan5-gian5-gi2-tsu1-liau7-khoo3.readthedocs.org/zh_TW/latest/%E4%BD%BF%E7%94%A8Postgres.html)

### 設定FB登入
#### 增加管理員帳號
```bash
python manage.py createsuperuser
```
email 和密碼隨意輸入，待會需用此帳密登入

#### 登入管理員並且設定FB app
1. 用瀏覽器進入 http://localhost:8000/admin
2. 輸入剛剛的 email 和密碼登入
3. 點選 SOCIAL ACCOUNTS 分類下的 Social applications 的 +Add
  1. provider：FB
  2. Client id：2055788134646727
  3. Secret key：880d339384674341c8bf1e62d8c8e0aa
  4. 左下角 choose all site
  5. 其他欄位隨便填

### google sheet匯入資料庫
參考[Obtain OAuth2 credentials from Google Developers Console](http://gspread.readthedocs.org/en/latest/oauth2.html)

1. 申請服務
2. 開啟Drive API
3. 用Service Account得到一個`服務帳戶json`，假設叫做`itaigi-sui2.json`
4. 將`itaigi-sui2.json`放到 server-side/

#### 設定google development
假設`服務帳戶json`得到`itaigi-sui2.json`
```bash
python manage.py 加sheet的json itaigi-sui2.json https://docs.google.com/spreadsheets/d/1_sXX2CGJsfSUTg-r-RGc4ApU1fPUmuLc2DmUSy4y_Zk/edit#gid=0
python manage.py 顯示全部sheet狀態
```

### 匯入資料
先去[寶島可夢](https://docs.google.com/spreadsheets/d/1LXzPeaL0hbj-HuUeJXKNUetAtwNNgIanN7bXM94iS7s/edit#gid=0)設定google sheet的`Can Edit`權限
```bash
echo 'from 佳怡表匯入資料庫 import 走 ; 走()' | python manage.py shell
echo 'from 匯入台華 import 走台華 ; 走台華()' | python manage.py shell
echo 'from 匯入寶島可夢 import 走寶島可夢 ; 走寶島可夢()' | python manage.py shell
echo 'from 匯入glll4678外來詞 import 走匯外來詞 ; 走匯外來詞()' | python manage.py shell
```
完整匯入需等待一段時間，等待途中可以繼續做其他事
若只需試驗，可中途中斷

### 無完整的簡單佈署流程
```
sudo apt-get install -y libffi-dev # 為了連google oauth2
git pull
pip install -r requirements.txt
python manage.py migrate
python manage.py 加sheet的json itaigi-9.json https://docs.google.com/spreadsheets/d/1_sXX2CGJsfSUTg-r-RGc4ApU1fPUmuLc2DmUSy4y_Zk/edit#gid=0
```


License
-----------

MIT License <http://g0v.mit-license.org/>
