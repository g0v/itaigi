
新台語·運動
===========

* [專案 Hackpad](https://g0v.hackpad.com/moed7ct-taigi-neologism)

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

	

##執行與實作（工程師依照大家的網站規範來設計）
```bash
pip install django-behave
behave 功能試驗
```

Usage
-----

## Frontend

Install:

        $ npm i && npm run build


Start development server:

        $ npm run dev
        # open http://localhost:3000/

## Backend

The backend runs on Python 2.x.

        $ cd server-side
        $ pip install -r packages
        $ python create_database.py
        $ python server.py
        # check out <http://0.0.0.0:8001/api/suggestions/%E8%A6%81%E8%A1%9D>

Development
-----------

Server-side API document: <http://docs.taigineologism.apiary.io/>


License
-----------

MIT License <http://g0v.mit-license.org/>
