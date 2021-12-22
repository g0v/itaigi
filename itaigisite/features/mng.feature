Feature: 我的發問

    @參詳好勢，猶未做
    Scenario: 紀錄關注互動狀態
        When 我公開發問 "辱華"
        Then "辱華" 記在我的發問頁
        When 有人關注 "辱華"
        Then 我的發問關注數是1

    @參詳好勢，猶未做
    Scenario: 紀錄回答互動狀態
        When 我公開發問 "辱華"
        Then "辱華" 記在我的發問頁
        When 有人回答 "辱華"
            | 羅馬字 | 漢字 |
            | jio̍k-huâ | jio̍k-huâ |
        Then 我的發問回答數是1