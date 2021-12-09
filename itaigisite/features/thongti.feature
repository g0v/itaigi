Feature: 通知清單

    @Koh-ài參詳
    Scenario: 通知我的發問狀態
        Given 公開發問 "辱華"
        When 有人回答
            | 羅馬字 | 漢字 |
            | jio̍k-huâ | jio̍k-huâ |
        Then 通知有人回答
        When 有人關注 "辱華"
        Then 通知有人關注
        When ？有人取消關注
        Then ？不需通知取消關注
        When ？有多少人也查詢過此發問
        Then ？通知很多人也查過

    @Koh-ài參詳
    Scenario: ？通知我的回答狀態
        Given 我回答 "辱華" 是
            | 羅馬字 | 漢字 |
            | jio̍k-huâ | jio̍k-huâ |
        When 有人讚
        Then ？通知有人讚
        When 有人收藏
        Then ？通知有人收藏
        When 有人取消收藏
        Then ？通知有人取消收藏

    @Koh-ài參詳
    Scenario: ？通知關注被原發問者移除

    @Koh-ài參詳
    Scenario: ？參考面冊通知操作選項
        ？標示已讀
        ？移除此通知
        ？關閉該粉專相關通知
        ？向工程團隊檢舉問題