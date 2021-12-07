Feature: 收藏別人回答

    Scenario: 收藏
        Given 辭典有
           | 發問 | 羅馬字 | 漢字 | 回答者 | 出處 | 
           | 寶可夢 | phō-khì-bong | 抱去摸 | Ali | 烏白想 |
        When 收藏進清單 "動畫"
        Then 記在我收藏的回答頁的 "動畫" 清單
           | 羅馬字 | 漢字 | 
           | phō-khì-bong | 抱去摸 |
        When 取消收藏 "抱去摸"
        Then 我收藏的回答頁的 "動畫" 清單無項目
        
        