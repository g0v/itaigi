Feature: 收藏別人回答

    @Koh-ài參詳
    Scenario: 收藏
        Given 辭典有
           | 發問 | 羅馬字 | 漢字 | 回答者 | 出處 | 
           | 寶可夢 | phō-khì-bong | 抱去摸 | Ali | 烏白想 |
        Then 可以記在我收藏的回答頁的 "動畫" 清單
        And 可以取消收藏

    @Koh-ài參詳
    Scenario: ？在查詢辭典頁顯示各個答案收藏數
        Given 公開發問 "辱華"
        And 有人回答
            | 羅馬字 | 漢字 |
            | jio̍k-huâ | jio̍k-huâ |
        When 有人收藏這回答
        Then 這回答在查詢辭典頁會顯示有1人收藏

    @Koh-ài參詳
    Scenario: ？在查詢辭典頁顯示各個答案讚數
        Given 公開發問 "辱華"
        And 有人回答
            | 羅馬字 | 漢字 |
            | jio̍k-huâ | jio̍k-huâ |
        When 有人覺得這回答讚
        Then 這回答在查詢辭典頁會顯示有1人讚