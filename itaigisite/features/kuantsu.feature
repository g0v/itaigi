Feature: 我關注的發問

    @參詳好勢，猶未做
    Scenario: 可以取消關注
        Given 我關注發問 "辱華"
        Then "辱華" 關注數是1
        When 我取消關注 "辱華"
        Then "辱華" 關注數是0

    @參詳好勢，猶未做
    Scenario: 原發問者可取消發問而提示無法關注
        Given 我關注發問 "辱華"
        When 發問者取消發問 "辱華"
        Then 我關注的發問會顯示此發問已經取消
