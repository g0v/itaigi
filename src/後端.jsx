export default class 後端  {
  static 網址() {
    // return 'http://private-f0474-tai5uan5gian5gi2phing5thai5.apiary-mock.com/';
    // return 'http://localhost:8000/';
    return 'https://db.itaigi.tw/';
  }

  static 揣按呢講列表(漢字, 台羅) {
    return encodeURI(this.網址() + '平臺項目列表/揣按呢講列表?關鍵字=' + 漢字);
  }

  static 例句列表(漢字, 臺羅) {
    return encodeURI('https://例句.意傳.台灣/' + '看/?漢字=' + 漢字 + '&臺羅=' + 臺羅);
  }

  static 貢獻者表() {
    return encodeURI(this.網址() + '貢獻者表');
  }

  static 揣無建議的外語() {
    return encodeURI(this.網址() + '平臺項目列表/揣無建議的外語');
  }

  static 平臺項目內容(suId) {
    return encodeURI(this.網址() + '平臺項目/看詳細內容?平臺項目編號=' + suId);
  }

  static 貢獻者表() {
    return encodeURI(this.網址() + '貢獻者表');
  }

  static 貢獻者表() {
    return encodeURI(this.網址() + '貢獻者表');
  }

  static 貢獻者表() {
    return encodeURI(this.網址() + '貢獻者表');
  }

}
