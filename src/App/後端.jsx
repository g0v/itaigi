export default class 後端  {
  static 網址() {
    // return 'http://private-f0474-tai5uan5gian5gi2phing5thai5.apiary-mock.com/';
    // return 'http://localhost:8000/';
    return 'https://db.itaigi.tw/';
  }

  static 揣按呢講列表(漢字, 台羅) {
    return encodeURI(this.網址() + '平臺項目列表/揣按呢講列表?關鍵字=' + 漢字);
  }
}
