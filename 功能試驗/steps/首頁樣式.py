from behave import given, when, then, step

@given(u'使用者進入首頁')
def step_impl(context):
	raise NotImplementedError(u'STEP: Given 使用者進入首頁')

@then(u'有首頁圖')
def step_impl(context):
	raise NotImplementedError(u'STEP: Then 有首頁圖')

@then(u'有搜尋列')
def step_impl(context):
	raise NotImplementedError(u'STEP: Then 有搜尋列')

@then(u'有搜尋鍵')
def step_impl(context):
	raise NotImplementedError(u'STEP: Then 有搜尋鍵')

@when(u'點了首頁圖')
def step_impl(context):
	raise NotImplementedError(u'STEP: When 點了首頁圖')

@then(u'使用者在計劃說明頁面')
def step_impl(context):
	raise NotImplementedError(u'STEP: Then 使用者在計劃說明頁面')
