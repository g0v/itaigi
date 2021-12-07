Feature: 查詢辭典

    Scenario: 公開發問和回答
        Given 辭典有
            | 發問 | 羅馬字 | 漢字 | 回答者 | 出處 | 
            | 寶可夢 | phō-khì-bong | 抱去摸 | Ali | 烏白想 |
        When 查詢 "辱華"
        Then 就有出現符合結果
            | 發問 | 羅馬字 | 漢字 | 回答者 | 出處 |
            | 寶可夢 | phō-khì-bong | 抱去摸 | Ali | 烏白想 |

    Scenario: 公開發問和回答
        Given 辭典有
            | 發問 | 羅馬字 | 漢字 |
        When 公開發問 "辱華"
        Then 辭典記住發問
        And 查詢 "辱華"
        And 猶原無出現符合結果
        When 有人回答
            | 發問 | 羅馬字 | 漢字 |
            | 辱華 | jio̍k-huâ | jio̍k-huâ |
        And 查詢 "辱華"
        And 就有出現符合結果
            | 發問 | 羅馬字 | 漢字 |
            | 辱華 | jio̍k-huâ | jio̍k-huâ |

    Scenario: 已經有人公開發問
        Given 有人代先公開發問 "辱華"
        When 我來查詢 "辱華"
        Then 我只能關注無法發問

    Scenario: 取消公開發問
        Given 公開發問 "辱華"
        Then 無論幾人關注允許取消發問

    Scenario: 新回答改為系統自動修正漢字以符合教典用字
        When 有人回答
            | 發問 | 羅馬字 | 漢字 |
            | 開溜 | làng-káng | 浪槓 |
        And 系統修正
            | 發問 | 羅馬字 | 漢字 |
            | 開溜 | làng-káng | làng-káng |
        And 同意系統修正
        Then 辭典有新回答
            | 發問 | 羅馬字 | 漢字 |
            | 開溜 | làng-káng | làng-káng |
    
    Scenario: 提示相關華語純粹依華語字形為主
        Given 辭典有
            | 發問 | 羅馬字 | 漢字 |
            | 花 | hue | 花 |
            | 花朵 | hue | 花 |
            | 花 | khai | 開 |
            | 花費 | khai | 開 |
        When 查詢 "花"
        Then 出現符合結果
            | 發問 | 羅馬字 | 漢字 |
            | 花 | hue | 花 |
            | 花 | khai | 開 |
        And 提示相關華語 "花朵" "花費"

    Scenario: 無登入就想回答，得要求登入
        Given 還沒登入
         When 想回答
         Then 要求他先註冊或登入