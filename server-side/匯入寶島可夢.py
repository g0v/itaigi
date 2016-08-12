# -*- coding: utf-8 -*-
from django.core.exceptions import ValidationError


from 臺灣言語平臺.項目模型 import 平臺項目表
from 臺灣言語平臺.正規化團隊模型 import 正規化sheet表
import gspread
from oauth2client.service_account import ServiceAccountCredentials


def 走寶島可夢():
    公家內容 = {
        '來源': {'名': '師大台文'},
    }
    for 第幾筆, 資料 in enumerate(sheet表內底資料()):
        if 第幾筆 % 10 == 0:
            print('匯到第 {} 筆'.format(第幾筆))
        外語內容 = {
            '外語資料': 資料['寶可夢'].strip()
        }
        外語內容.update(公家內容)
        閩南語內容 = {
            '文本資料': 資料['寶島可夢'].strip(),
            '屬性': {'音標': 資料['臺羅'].strip()},
        }
        閩南語內容.update(公家內容)
        try:
            外語平臺項目 = 平臺項目表.加外語資料(外語內容)
            外語平臺項目編號 = 外語平臺項目.編號()
        except ValidationError as 錯誤:
            外語平臺項目編號 = 錯誤.平臺項目編號
        文本平臺項目 = 平臺項目表.外語翻母語(外語平臺項目編號, 閩南語內容)
        文本平臺項目.設為推薦用字()


def sheet表內底資料():
    資料表 = sheet表()
    全部資料 = 資料表.get_all_values()
    標題 = 全部資料[0]
    for 一筆 in 全部資料[1:]:
        這筆資料 = dict(zip(標題, 一筆))
        yield 這筆資料


def sheet表():
    寶島可夢網址 = 'https://docs.google.com/spreadsheets/d/1LXzPeaL0hbj-HuUeJXKNUetAtwNNgIanN7bXM94iS7s/edit#gid=0'
    臺語表 = 正規化sheet表.全部資料().get()
    登入憑證 = ServiceAccountCredentials.from_json_keyfile_name(
        臺語表.key_file_name, 正規化sheet表.google_sheet_scope
    )
    return gspread.authorize(登入憑證).open_by_url(
        寶島可夢網址
    ).sheet1
