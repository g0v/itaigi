from behave import given, when, then, step

@given(u'資料庫有外語請教條"{外語語言}"的"{外語資料}"')
def step_impl(context,外語語言,外語資料):
	raise NotImplementedError(u'STEP: Given 資料庫有外語請教條"華語"的"水母"')

@given(u'外語請教條"{外語語言}"的"{外語資料}"有來源是"{新詞來源}"的新詞文本"{新詞文本}"和拼音"{新詞音標}"')
def step_impl(context,外語語言,外語資料,新詞來源,新詞文本,新詞音標):
	raise NotImplementedError(u'STEP: Given 外語請教條"華語"的"水母"有來源是"臺灣閩南語常用詞辭典"的新詞文本"䖳"和拼音"thē"')
