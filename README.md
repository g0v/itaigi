
新台語·運動
===========

* [專案 Hackpad](https://g0v.hackpad.com/moed7ct-taigi-neologism)


## Usage

[API介面](http://docs.tai5uan5gian5gi2phing5thai5.apiary.io/#)

### Frontend

Install:

        $ npm i && npm run build


Start development server:

        $ npm start
        # open http://localhost:3000/

### Backend

後端程式使用Python 3.4+，並放在`server-side/`資料夾.
以下指令請在`server-side/`裡面執行

#### 環境設定
```python3
virtualenv venv --python python3 # 設置環境檔
. venv/bin/activate # 載入環境
pip install -r requirements.txt # 裝相關python套件
python manage.py migrate #建立資料庫欄位
sudo apt-get install libav-tools -y # 安裝avconv for Ubuntu
```

### Postgres設定
詳情請看臺灣言語資料庫的[使用Postgres](http://tai5-uan5-gian5-gi2-tsu1-liau7-khoo3.readthedocs.org/zh_TW/latest/%E4%BD%BF%E7%94%A8Postgres.html)

#### 匯入資料
```bash
echo 'from 佳怡表匯入資料庫 import 走 ; 走()' | python manage.py shell
```
完整匯入需等待一段時間，等待途中可以繼續做其他事
若只需試驗，可中途中斷

### 跑服務
開發用，程式碼若有修改會重新載入
```bash
python manage.py runserver
```
上機用，支援多線程
```bash
gunicorn itaigi.wsgi
```

### 設定FB登入
#### 增加管理員帳號
```bash
python manage.py createsuperuser
```
email和密碼隨意輸入

#### 登入管理員並且設定FB app
1. 用瀏覽器進入 /admin
2. 輸入剛剛的email和密碼
3. social application
provider：FB 
id：590065061070994
key：db4f3fa26d26890e720d17a83ff5a6fe
最後左下角choose all site
其他欄位隨便填

TODO
----
詳見[issue](https://github.com/g0v/taigi-neologism/issues)

- [ ] Facebook 登入
- [ ] 投票
- [ ] 各詞條討論

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
