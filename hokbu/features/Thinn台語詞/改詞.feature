Feature: 人客來講伊ê講法，ài改

Scenario: 有人改別人ê講法，若原作者同意，就改--過
    Given 有人講華語「口罩」，台語講「tshuì-ōm」
    When 有別人講「tshuì-ōm」應該是「tshuì-om」才著
    And 原作者同意改做「tshuì-om」
    Then 查華語「口罩」，有出現台語「tshuì-om」

Scenario: 有人改別人ê講法，若原作者bô同意，就2條詞條tsóng出現
    Given 有人講華語「口罩」，台語講「tshuì-ōm」
    When 有別人講「tshuì-ōm」應該是「tshuì-om」才著
    And 原作者bô同意改做「tshuì-om」
    Then 查華語「口罩」，有出現台語「tshuì-om」
    And 查華語「口罩」，有出現台語「tshuì-om」
    
Scenario: 有人改別人ê講法，若有第2ê人嘛按呢反應，就改--過
    Given 有人講華語「口罩」，台語講「tshuì-ōm」
    When 有別人講「tshuì-ōm」應該是「tshuì-om」才著
    And 閣有人講「tshuì-ōm」應該是「tshuì-om」才著
    Then 查華語「口罩」，有出現台語「tshuì-om」
    
Scenario: 有人改別人ê講法，若過1禮拜原作者反應，就改--過？新詞條？
    Given 有人講華語「口罩」，台語講「tshuì-ōm」
    When 有別人講「tshuì-ōm」應該是「tshuì-om」才著
    And 過1個月
    Then 查華語「口罩」，有出現台語「tshuì-om」
