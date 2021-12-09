Feature: 關注

    @Koh-ài參詳
    Scenario: 關注有可能被原發問者取消發問而消失

    @Koh-ài參詳
    Scenario: ？顯示此發問關注數
        Given 公開發問 "辱華"
        When 有人關注這問題
        Then 這發問會顯示有1人關注
