exports.render = function ({ url, title, image }) {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>iTaigi 愛台語</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="台語,臺語,閩南語,河洛話,學習,語言,學台語,學臺語,線上學台語,線上學臺語,台語字典,臺語字典,台語發音,臺語發音,台羅,臺羅,台灣閩南語羅馬字拼音,臺灣閩南語羅馬字拼音,台語字,臺語字,台語漢字,臺語漢字,台語翻譯,臺語翻譯,靠北,靠腰,北七" />
    <meta name="description" content="大家來學台語，大家做伙來豐富台語" />
    <meta property="fb:app_id" content="590065061070994"/>
    <meta property="og:url" content="${url}"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="${title}"/>
    <meta property="og:description" content="大家來學台語，大家做伙來豐富台語"/>
    <meta property="og:image" content="${image}">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta itemprop="description" content="大家來學台語，大家做伙來豐富台語">
    <meta itemprop="image" content="${image}">

    <link rel="apple-touch-icon" sizes="180x180" href="//g0v.github.io/itaigi/apple-touch-icon.png">
    <link rel="icon" type="image/png" href="//g0v.github.io/itaigi/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="//g0v.github.io/itaigi/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="//g0v.github.io/itaigi/manifest.json">
    <link rel="mask-icon" href="//g0v.github.io/itaigi/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#ffffff">

    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.css"/>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.js"></script>
  </head>
  <body>
    <div id="sidebar" class="ui thin sidebar vertical labeled icon large devided menu"></div>
    <div id="app" class="pusher"></div>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-49660899-2', 'auto');
      ga('send', 'pageview');

    </script>
    <script type="text/javascript" src="//g0v.github.io/itaigi/bundle.js"></script>
  </body>
</html>`;
};
