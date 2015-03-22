from behave import given, when, then, step

@when(u'使用者輸入"{請教條}"關鍵字')
def step_impl(context,請教條):
	raise NotImplementedError(u'STEP: When 使用者輸入"水母"關鍵字')

@when(u'按下搜尋鍵')
def step_impl(context):
	raise NotImplementedError(u'STEP: When 按下搜尋鍵')

@then(u'搜尋結果顯示沒資料')
def 搜尋結果顯示沒資料(context):
	raise NotImplementedError(u'STEP: Then 顯示沒資料')

@then(u'顯示外語請教條"{外語語言}"的"{外語資料}"')
def step_impl(context,外語語言,外語資料):
	raise NotImplementedError(u'STEP: Then 顯示外語請教條"華語"的"水母"')

@then(u'外語請教條"{外語語言}"的"{外語資料}"底下沒有建議')
def step_impl(context,外語語言,外語資料):
	raise NotImplementedError(u'STEP: Then 外語請教條"華語"的"水母"底下沒有建議')

@then(u'外語請教條"{外語語言}"的"{外語資料}"底下有新詞文本"{文本資料}"')
def step_impl(context,外語語言,外語資料,文本資料):
	raise NotImplementedError(u'STEP: Then 外語請教條"華語"的"水母"底下有新詞文本"䖳"')
