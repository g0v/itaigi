<a href="https://itaigi.tw/"><img src="https://itaigi.tw/121c4ed080e9127a72d31ae85d1458fc.svg" width="100"></a>新台語·運動
===========
[![Build Status](https://travis-ci.org/g0v/itaigi.svg?branch=master)](https://travis-ci.org/g0v/itaigi)
[![devDependency Status](https://david-dm.org/g0v/itaigi/dev-status.svg)](https://david-dm.org/g0v/itaigi?type=dev)
[![made in taiwan](https://img.shields.io/badge/made%20in-taiwan-blue.svg)](https://itaigi.tw)
[![made in g0v](https://img.shields.io/badge/made%20in-g0v-B81C21.svg)](http://g0v.tw/en-US/)

* [itaigi網站](https://itaigi.tw)
* [FB粉專](https://www.facebook.com/ukauitaigi/)
* [Slack討論](https://g0v-tw.slack.com/messages/itaigi/)
* [萌典松](http://moe.kktix.cc/)
* [專案Hackpad](https://g0v.hackpad.tw/moed7ct-taigi-neologism)
* [API介面](http://docs.tai5uan5gian5gi2phing5thai5.apiary.io/#)
* [正規化工作表](https://docs.google.com/spreadsheets/d/1_sXX2CGJsfSUTg-r-RGc4ApU1fPUmuLc2DmUSy4y_Zk)

### Run

```bash
$ npm i
$ npm start
```

Then open <http://localhost:3000/>

### Deploy
```bash
$ npm run deploy
```

### Deploy test-server

測試上線。

* 任選其中一臺
* 到github pull request page
* 確認沒有pull request正在使用測試機
* 新增你的pull request
* 標記你要用的測試機

```bash
$ npm run deploy-tshi3
```
Then open <http://tshi3.itaigi.tw/>

```bash
$ npm run deploy-giam7
```

Then open <http://giam7.itaigi.tw/>

```bash
$ npm run deploy-test
```
Then open <http://test.itaigi.tw/>


### Coding style check

遵循[Airbnb](https://github.com/airbnb/javascript)排版規則

```bash
$npm test
$npm run reformat
```

### Nodejs installation (optional)

可使用nvm安裝nodejs，請指定4以上的版本。

```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash && source ~/.nvm/nvm.sh
$ nvm install 6

$ nvm use 6
```

### Backend

[Wiki](https://github.com/g0v/itaigi/wiki)


License
-----------

MIT License <http://g0v.mit-license.org/>
