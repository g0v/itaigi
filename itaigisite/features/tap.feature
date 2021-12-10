Feature: 我的回答

    @參詳好勢，猶未做
    Scenario: 紀錄收藏互動狀態
        Given 有人公開發問 "辱華"
        When 我回答 "辱華"
            | 羅馬字 | 漢字 |
            | jio̍k-huâ | jio̍k-huâ |
        Then 記在我的回答頁
            | 羅馬字 | 漢字 |
            | jio̍k-huâ | jio̍k-huâ |
        When 有人收藏 "辱華"
        Then 我的回答收藏數是1

    @參詳好勢，猶未做
    Scenario: 紀錄讚互動狀態
        Given 有人公開發問 "辱華"
        When 我回答 "辱華"
            | 羅馬字 | 漢字 |
            | jio̍k-huâ | jio̍k-huâ |
        Then 記在我的回答頁
            | 羅馬字 | 漢字 |
            | jio̍k-huâ | jio̍k-huâ |
        When 有人讚 "辱華"
        Then 我的回答讚數是1
        When 有人取消讚 "辱華"
        Then 我的回答讚數是0
