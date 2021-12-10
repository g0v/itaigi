Feature: 查詢辭典
    保留前版功能：我想欲知影按怎講、閣會使按呢講、按呢講好
    新舊文案對照
        - 我想欲知影按怎講：發問
        - 閣會使按呢講：回答
        - 按呢講好：讚
    新功能：取消發問、關注發問、收藏回答
    
    討論. 讚vs收藏，要合併還是分開？
    結論. 因為讚是現有功能，收藏是新功能，暫不合併以免誤會。

    @參詳好勢，猶未做
    Scenario: 公開發問和回答
        Given 公開發問 "辱華"
        When 有人回答 "辱華"
            | 羅馬字 | 漢字 |
            | jio̍k-huâ | jio̍k-huâ |
        Then 查詢 "辱華"
        And 就有出現符合結果

    @參詳好勢，猶未做
    Scenario: 已經有人公開發問
        Given 有人代先公開發問 "辱華"
        When 我來查詢 "辱華" 想要發問
        Then 我只能關注無法發問

    @參詳好勢，猶未做
    Scenario: 取消公開發問
        Given 公開發問 "辱華"
        When 有人關注這問題
        Then 允許取消發問

    @參詳好勢，猶未做
    Scenario: 禁止取消有回答的公開發問
        Given 公開發問 "辱華"
        When 有人回答 "辱華"
            | 羅馬字 | 漢字 |
            | jio̍k-huâ | jio̍k-huâ |
        Then 不允許取消發問

    @參詳好勢，猶未做
    Scenario: 新回答從正規化團隊改由系統自動修正漢字以符合教典用字，以便即時新增詞
        When 有人回答 "溜走"
            | 羅馬字 | 漢字 |
            | làng-káng | 浪槓 |
        And 系統修正
            | 羅馬字 | 漢字 |
            | làng-káng | làng-káng |
        And 他同意系統修正並上傳回答
        Then 辭典有新回答
            | 羅馬字 | 漢字 |
            | làng-káng | làng-káng |

    @參詳好勢，猶未做
    Scenario: 提示相關華語
        Given 辭典有
            | 發問 | 羅馬字 | 漢字 |
            | 花 | hue | 花 |
            | 花 | khai | 開 |
            | 花朵 | hue | 花 |
            | 花費 | khai | 開 |
        When 查詢 "花"
        Then 提示相關華語 "花朵" "花費"

    @參詳好勢，猶未做
    Scenario: 無登入就想回答、投票，得要求登入
        Given 還沒登入
         When 想回答
         Then 要求他先註冊或登入

    @參詳好勢，猶未做
    Scenario: 會照讚排先後
        Given 公開發問 "辱華"
        And 有人回答
            | 羅馬字 | 漢字 |
            | jio̍k-huâ | jio̍k-huâ |
        And 又有人回答
            | 羅馬字 | 漢字 |
            | lin-ku̍t | 奶滑 |
        When 有人覺得這個回答讚
            | 羅馬字 | 漢字 |
            | jio̍k-huâ | jio̍k-huâ |
        When 查詢 "花"
        Then 回答先後是
            | 羅馬字 | 漢字 | 讚 |
            | jio̍k-huâ | jio̍k-huâ | 1 |
            | lin-ku̍t | 奶滑 | 0 |
