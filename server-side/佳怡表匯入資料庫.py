# -*- coding: utf-8 -*-
from curses.ascii import isupper
import os
import xlrd


from 臺灣言語資料庫.資料模型 import 來源表
from 臺灣言語平臺.項目模型 import 平臺項目表
from 臺灣言語資料庫.資料模型 import 版權表
from 臺灣言語資料庫.資料模型 import 種類表
from 臺灣言語資料庫.欄位資訊 import 字詞
from 臺灣言語資料庫.欄位資訊 import 語句


class 佳怡表匯入資料庫:
    資料夾 = '.'
    資料表檔名 = '新台語網站資料表20150320.xlsx'

    def 資料(self):
        這馬所在 = os.path.dirname(os.path.abspath(__file__))
        表格檔 = xlrd.open_workbook(os.path.join(這馬所在, self.資料夾, self.資料表檔名))
        表格 = 表格檔.sheet_by_name('kokgi')
        表格欄位 = {}
        for 第幾個, 資料 in enumerate(表格.row_values(0)):
            表格欄位[資料] = 第幾個
        資料 = []
        for 第幾逝 in range(1, 表格.nrows):
            逝 = 表格.row_values(第幾逝)
            資料.append(
                (逝[表格欄位['台語']], 逝[表格欄位['台羅']], [逝[表格欄位['華語']]],)
            )
        return 資料

    def 來源內容(self):
        return {'名': '臺灣閩南語常用詞辭典', '單位': '中華民國教育部'}


def 走():
    來源表.objects.get_or_create(名='鄉民')
    版權表.objects.get_or_create(版權='會使公開')
    種類表.objects.get_or_create(種類=字詞)
    種類表.objects.get_or_create(種類=語句)
    資料庫 = 佳怡表匯入資料庫()
    公家內容 = {
        '收錄者': 1,
        '來源': 資料庫.來源內容(),
        '版權': '會使公開',
        # 		'種類':'字詞',
        '語言腔口': '閩南語',
        '著作所在地': '臺灣',
        '著作年': '2014',
        # 		'屬性':self.詞屬性,
    }
    for 漢字, 音標, 華語 in 資料庫.資料():
        if len(音標) > 0 and isupper(音標[0]):
            種類 = '語句'
        else:
            種類 = '字詞'
        閩南語內容 = {
            '文本資料': 漢字,
            '種類': 種類,
            '屬性': {'音標': 音標},
        }
        閩南語內容.update(公家內容)
        if len(華語) > 0:
            for 華 in 華語:
                外語內容 = {
                    '種類': 種類,
                    '外語語言': '華語',
                    '外語資料': 華}
                外語內容.update(公家內容)
                try:
                    外語平臺項目 = 平臺項目表.找外語資料(外語內容)
                except:
                    外語平臺項目 = 平臺項目表.加外語資料(外語內容)
                平臺項目表.外語翻母語(外語平臺項目.編號(), 閩南語內容)
# 				外語=外語表.加資料(外語內容)
# 				外語.翻母語(閩南語內容)
        else:
            pass
# 			文本表.加資料(閩南語內容)
