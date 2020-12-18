export default class 後端  {
  static 網址() {
    // return 'http://private-f0474-tai5uan5gian5gi2phing5thai5.apiary-mock.com/';
    // return 'http://localhost:8000/';
    // return 'https://db.itaigi.tw/';
    return 'https://itaigi.tw/';
  }

  static 揣按呢講列表(漢字, 台羅) {
    return encodeURI(this.網址() + '平臺項目列表/揣按呢講列表?關鍵字=' + 漢字);
  }

  static 例句列表(漢字, 臺羅) {
    'safari需要直接用punycode';
    return encodeURI('https://leku.itaigi.tw/' + '看/?漢字=' + 漢字 + '&臺羅=' + 臺羅);
  }

  static 貢獻者表() {
    return encodeURI(this.網址() + '貢獻者表');
  }

  static 正規化貢獻者表() {
    return encodeURI(this.網址() + '正規化團隊表');
  }

  static 揣無建議的外語(排序) {
    return encodeURI(this.網址() + '平臺項目列表/揣無建議的外語?排序=' + 排序);
  }

  static 平臺項目內容(suId) {
    return encodeURI(this.網址() + '平臺項目/看詳細內容?平臺項目編號=' + suId);
  }

  static 加外語() {
    return encodeURI(this.網址() + '平臺項目/加外語');
  }

  static 投票() {
    return encodeURI(this.網址() + '平臺項目/投票');
  }

  static 加新詞文本() {
    return encodeURI(this.網址() + '平臺項目/加新詞文本');

  }

  static 揣列表(名) {
    return encodeURI(this.網址() +  '平臺項目列表/揣列表?關鍵字=' + 名);
  }

  static 揣上新貢獻的外語() {
    return encodeURI(this.網址() + '平臺項目列表/揣上新貢獻的外語');
  }

  static 登入() {
    return encodeURI(this.網址() + 'accounts/facebook/login');
  }

  static 登入token() {
    return encodeURI(this.網址() + 'accounts/facebook/login/token/');
  }

  static 名姓(姓, 名) {
    return encodeURI('https://miasenn.itaigi.tw/' +  姓 +  '/' + 名 + '/');
  }
}
