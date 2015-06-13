
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

至於`#`開頭的那行表示解釋，讓大家更好閱讀

註：`功能試驗/steps`裡面是工程師用的東西，不重要不需要看懂XD

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

The backend runs on Python 3.3+ and is maintained in another repository:
<https://github.com/sih4sing5hong5/tai5-uan5_gian5-gi2_phing5-thai5>

[API介面](http://docs.tai5uan5gian5gi2phing5thai5.apiary.io/#)

Development
-----------

Server-side API document: <http://docs.taigineologism.apiary.io/>


License
-----------

MIT License <http://g0v.mit-license.org/>
