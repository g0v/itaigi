Feature: 人客來thinn講伊ê講法
    考慮下底2種情形，規劃有羅馬字才tshiau會著：
        1. 看bô台文ê人，攏kōo聽--ê，就愛羅馬字才有合成。
        2. 看有台文ê人，ài羅馬字才有法度學。

Scenario: 人客來講伊ê講法，若有羅馬字，就tshiau會著
    When 有人講華語「口罩」，台語講「tshuì-om」
    Then 查華語「口罩」，有出現台語「tshuì-om」

Scenario: 人客來講伊ê講法，若有附羅馬字、漢字，就tshiau會著
    When 有人講華語「口罩」，台語講「tshuì-om 喙om」
    Then 查華語「口罩」，有出現台語「tshuì-ōm 喙om」

Scenario: 人客來講伊ê講法，kan-na漢字，ài人thinn羅馬字，才tshiau會著
    When 有人講華語「口罩」，台語講「喙掩」
    And 有人kā台語「喙掩」，thinn羅馬字「tshuì-om」
    Then 查華語「口罩」，有出現台語「tshuì-om 喙掩」

Scenario: 若是人客ê漢字，bô ha̍h教育部規範，會自動改做羅馬字
    When 有人講華語「口罩」，台語講「tshuì-om 喙罩」
    Then 查華語「口罩」，有出現台語「tshuì-om 喙om」

