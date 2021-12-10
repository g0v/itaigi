Feature: 通知清單
    決定啥物ài通知，而且ta̍k筆通知ē-sái做啥物操作。
    我的發問
    我的回答
    
    我關注的發問
    我收藏的回答

    免通知：對方取消發問使得我無法關注、別人取消關注我的發問、別人取消收藏我的回答

    Scenario: 通知有人回答我的發問
        Given 我公開發問 "辱華"
        When 有人回答 "辱華"
            | 羅馬字 | 漢字 |
            | jio̍k-huâ | jio̍k-huâ |
        Then 通知我有人回答我
        And 通知連結到公開發問 "辱華" 的頁面

    Scenario: 通知別人關注我的發問
        Given 我公開發問 "辱華"
        When 有人關注 "辱華"
        Then 通知有人關注
        And 通知連結到公開發問 "辱華" 的頁面

    Scenario: 通知別人收藏我的回答
        Given 我回答 "辱華" 是
            | 羅馬字 | 漢字 |
            | jio̍k-huâ | jio̍k-huâ |
        When 有人收藏
        Then 通知有人收藏
        And 通知連結到公開發問 "辱華" 的頁面
        
    Scenario: 通知別人讚我的回答
        Given 我回答 "辱華" 是
            | 羅馬字 | 漢字 |
            | jio̍k-huâ | jio̍k-huâ |
        When 有人讚
        Then 通知有人讚
        And 通知連結到公開發問 "辱華" 的頁面
