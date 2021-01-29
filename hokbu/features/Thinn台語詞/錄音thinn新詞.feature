Feature: 人客kōo錄音，kōo講--ê

Scenario: 人講--ê，ē-tàng補漢字、羅馬字
    Given 有人想講華語「口罩」，唸台語「tshuì-ōm」聲音
    When 有別人講台文應該是「tshuì-om 喙om」
    Then 查華語「口罩」，有出現台語「tshuì-om 喙om」
