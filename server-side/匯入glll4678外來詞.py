# -*- coding: utf-8 -*-
import json
from os.path import join, dirname

from django.core.exceptions import ValidationError


from 臺灣言語平臺.項目模型 import 平臺項目表


def 走匯外來詞():
    with open(join(dirname(__file__), '語料', '臺灣閩南語常用詞辭典-外來詞-glll4678整理.csv')) as 檔案:
        sheet表內底資料 = json.load(檔案)
    for 第幾筆, (華語, 漢字, 臺羅) in enumerate(sheet表內底資料):
        if 第幾筆 % 10 == 0:
            print('匯到第 {} 筆'.format(第幾筆))
        外語內容 = {
            '來源': {'名': '臺灣閩南語常用詞辭典'},
            '外語資料': 華語.strip()
        }
        閩南語內容 = {
            '文本資料': 漢字,
            '屬性': {'音標': 臺羅},
        }
        try:
            外語平臺項目 = 平臺項目表.加外語資料(外語內容)
            外語平臺項目編號 = 外語平臺項目.編號()
        except ValidationError as 錯誤:
            外語平臺項目編號 = 錯誤.平臺項目編號
        文本平臺項目 = 平臺項目表.外語翻母語(外語平臺項目編號, 閩南語內容)
        文本平臺項目.設為推薦用字()
