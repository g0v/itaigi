Feature: 使用者進入首頁
	包括搜尋功能、看列表的功能

	Scenario: 首頁看得到圖片和搜尋列
		Given 使用者進入首頁
		Then 有首頁圖
			and 有搜尋列
			and 有搜尋鍵
			
	Scenario: 首頁看得到圖片和搜尋列
		Given 使用者進入首頁
		When 點了首頁圖
		Then 使用者在計劃說明頁面
	