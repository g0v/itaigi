# -*- coding: utf-8 -*-
from os.path import join, dirname

from django.core.exceptions import ValidationError


from 臺灣言語平臺.項目模型 import 平臺項目表
from csv import DictReader


def 走():
    公家內容 = {
        '來源': {'名': '金融尬台語'},
    }
    with open(join(dirname(__file__), '語料', '金融新詞資料表.csv')) as 檔案:
        for 第幾筆, 資料 in enumerate(DictReader(檔案)):
            if 第幾筆 % 10 == 0:
                print('匯到第 {} 筆'.format(第幾筆))
            外語內容 = {
                '外語資料': 資料['華語'].strip()
            }
            外語內容.update(公家內容)
            閩南語內容 = {
                '文本資料': 資料['台語漢字'].strip(),
                '屬性': {'音標': 資料['台羅'].strip()},
            }
            閩南語內容.update(公家內容)
            try:
                外語平臺項目 = 平臺項目表.加外語資料(外語內容)
                外語平臺項目編號 = 外語平臺項目.編號()
            except ValidationError as 錯誤:
                外語平臺項目編號 = 錯誤.平臺項目編號
            文本平臺項目 = 平臺項目表.外語翻母語(外語平臺項目編號, 閩南語內容)
            文本平臺項目.設為推薦用字()
