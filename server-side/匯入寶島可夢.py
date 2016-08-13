# -*- coding: utf-8 -*-
import json
from os.path import join, dirname
from urllib.request import urlopen

from bs4 import BeautifulSoup
from django.core.exceptions import ValidationError
import gspread
from oauth2client.service_account import ServiceAccountCredentials


from 臺灣言語平臺.項目模型 import 平臺項目表
from 臺灣言語平臺.正規化團隊模型 import 正規化sheet表


def 走寶島可夢():
    公家內容 = {
        '來源': {'名': '師大台文'},
    }
    with open(join(dirname(__file__), '語料', '寶島可夢表.json')) as 檔案:
        sheet表內底資料 = json.load(檔案)
    with open(join(dirname(__file__), '語料', '抱去摸對照表.json')) as 檔案:
        抱去摸對照表 = {}
        for 對照 in json.load(檔案):
            抱去摸對照表[(int(對照['全國 編號']), 對照['中文 （台灣）'])] = 對照['英文']
    for 第幾筆, 資料 in enumerate(sheet表內底資料):
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
            
        英語內容 = {
            '外語資料': 抱去摸對照表[(int(資料['圖鑑編號']),資料['寶可夢'])]
        }
        try:
            外語平臺項目 = 平臺項目表.加外語資料(英語內容)
            外語平臺項目編號 = 外語平臺項目.編號()
        except ValidationError as 錯誤:
            外語平臺項目編號 = 錯誤.平臺項目編號
        文本平臺項目 = 平臺項目表.外語翻母語(外語平臺項目編號, 閩南語內容)
        文本平臺項目.設為推薦用字()


def 掠sheet表資料():
    輸出資料 = []
    for 一筆 in sheet表內底資料():
        輸出資料.append(一筆)
    with open(join(dirname(__file__), '語料', '寶島可夢表.json'), 'w') as 檔案:
        json.dump(輸出資料, 檔案, ensure_ascii=False, indent=2, sort_keys=True)


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


def 掠對照表():
    網址 = 'http://www.pikatw.com/t/pokedexn.htm'
    with urlopen(網址) as 檔案:
        soup = BeautifulSoup(檔案.read(), 'lxml')
    for table in soup.find_all('table'):
        try:
            if table['id'] == 'table1':
                全部資料 = []
                for tr in table.find_all('tr'):
                    一逝 = []
                    for td in tr.find_all('td'):
                        一逝.append(' '.join(td.get_text().split()))
                    全部資料.append(一逝)
                輸出資料 = []
                標題 = 全部資料[0]
                for 一筆 in 全部資料[1:]:
                    這筆資料 = dict(zip(標題, 一筆))
                    輸出資料.append(這筆資料)
        except:
            pass
    with open(join(dirname(__file__), '語料', '抱去摸對照表.json'), 'w') as 檔案:
        json.dump(輸出資料, 檔案, ensure_ascii=False, indent=2, sort_keys=True)
