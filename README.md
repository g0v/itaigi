
新台語·運動
===========
[![devDependency Status](https://david-dm.org/g0v/itaigi/dev-status.svg)](https://david-dm.org/g0v/itaigi#info=devDependencies)

* [網站](http://itaigi.tw)
* [專案 Hackpad](https://g0v.hackpad.com/moed7ct-taigi-neologism)
* [API介面](http://docs.tai5uan5gian5gi2phing5thai5.apiary.io/#)
* [正規化工作表](https://docs.google.com/spreadsheets/d/1_sXX2CGJsfSUTg-r-RGc4ApU1fPUmuLc2DmUSy4y_Zk)

### Frontend

Install:

#### Install npm
[安裝 NPM](https://github.com/nodejs-tw/nodejs-wiki-book/blob/master/zh-tw/node_npm.rst)

If in ubuntu 14.04
```bash
$ sudo apt-get install npm nodejs-legacy
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
then open http://localhost:3000/

#### 佈署:

```bash
$ npm run deploy
```


### Backend

後端使用使用[臺灣言語平臺](https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_phing5-tai5)。
環境要求Python 3.4+，並放在`server-side/`資料夾.
以下指令請在`server-side/`裡面執行

#### 環境設定
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

### 匯入資料
```bash
echo 'from 佳怡表匯入資料庫 import 走 ; 走()' | python manage.py shell
```
完整匯入需等待一段時間，等待途中可以繼續做其他事
若只需試驗，可中途中斷

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

### 無完整的簡單佈署流程
```
sudo apt-get install -y libffi-dev # 為了連google oauth2
git pull
pip install -r requirements.txt
python manage.py migrate
python manage.py 加sheet的json itaigi-9.json https://docs.google.com/spreadsheets/d/1_sXX2CGJsfSUTg-r-RGc4ApU1fPUmuLc2DmUSy4y_Zk/edit#gid=0
```

開發
----

* JavaScript Style: [Airbnb](https://github.com/airbnb/javascript)
  - `npm test` 檢查
  - `npm run reformat` 自動重排


歡迎非工程師的大家一起參與網站規劃
-----------
請大家進`功能試驗`資料夾新增、編寫feature檔案
###文件格式
可以先參考`功能試驗/首頁樣式.feature`的範例
可以先看這兩大關鍵字：

- Feature
  -  整個檔案的說明，說明整個檔案想要規劃的方向和內容
-	Scenario
  - 使用網站的情境的說明，同一個檔案可以有許多Scenario

  大家可以用Feature和Scenario先勾勒出整個網站的設計。如果行有餘力，可以規劃更詳細一點，像是滑鼠點圖片等等，這邊有四個語法：

- Given
  - 這個情境的初使條件
-	When
  - 使用者做了哪些動作、點了哪些鍵，輸入了什麼資料
- Then
  - 使用者應該看到的內容
- and
  - 當Given, When, Then不只一行時，可以擴充第二行、第三行、…

至於`#`開頭的那行表示解釋，讓大家更好閱讀

註：`功能試驗/steps`裡面是工程師用的東西，不重要不需要看懂XD

## 執行與實作（工程師依照大家的網站規範來設計）
```bash
pip install django-behave
behave 功能試驗
```


License
-----------

MIT License <http://g0v.mit-license.org/>
