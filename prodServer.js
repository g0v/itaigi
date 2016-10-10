var path = require('path');
var express = require('express');
var config = require('./webpack.config.dev');
var template = require('./html/prodTemplate');

if ((parseInt(process.versions.node[0]) == 0) && (parseInt(process.versions.node.slice(2)) <= 12)) {
  console.log(
    'Node.js version ' + process.versions.node + ' too old; please upgrade to Node.js 4.0 or later.'
  );
  process.exit();
}

var app = express();

app.use(express.static(path.resolve('build')));

app.get('/:Iah([kt])/:Su', function (req, res) {
  console.log(req.params);
  let { Iah, Su } = req.params;
  res.send(template.render({
    url: `http://itaigi.tw/${Iah}/${Su}`,
    title: `${Su} - iTaigi 愛台語`,
    image: `https://www.moedict.tw/${encodeURI(Su)}.png?font=wt064`,
  }));
});

app.get('*', function (req, res) {
  res.send(template.render({
    url: 'http://itaigi.tw/',
    title: 'iTaigi 愛台語',
    image: 'https://s3-ap-southeast-1.amazonaws.com/itaigi.tw/images/logo.png',
  }));
});

app.listen(80, '0.0.0.0', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:80');
});
