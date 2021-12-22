import React from 'react';
import { render } from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router';
import Debug from 'debug';
import App from './App/App';
import Kong from './Iah/Kong/Kong';
import The from './Iah/The/The';
import Iong from './Iah/Iong/Iong';
import Mia from './Iah/Mia/Mia';
import 正規化 from './Iah/Mia/正規化';
import About from './Iah/About/About';
import 抱去摸 from './Iah/主題/抱去摸';
import 台語寶鑑 from './Ogilvy/主題/台語寶鑑';
import 金融尬台語 from './Ogilvy/主題/金融尬台語';
import KuahPau from './GuanKiann/TshiuKiSuanTuann/KuahPau';
import TshiuKiSuanTuann from './GuanKiann/TshiuKiSuanTuann/TshiuKiSuanTuann';
import 名姓 from './Iah/名姓/名姓';
import Unsu from './Iah/About/Unsu';
import Hokbu from './Iah/About/Hokbu';

Debug.enable('itaigi:*');

const root = document.getElementById('app');

// if (window.location.pathname === '/') {
// render(<HuanGing/>, root)
// } else {
const history = browserHistory;
render(
  <div>
    <KuahPau />
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Kong} />
        <Route path="k(/:k)(/:han)(/:lo)" component={Kong} />
        <Route path="t(/:k)" component={The} />
        <Route path="iong" component={Iong} />
        <Route path="mia" component={Mia} />
        <Route path="tsing" component={正規化} />
        <Route path="about" component={About} />
        <Route path="tsu-te" component={台語寶鑑} />
        <Route path="tsu-te/pho-khi-bong" component={抱去摸} />
        <Route path="tsu-te/kim-iong-kah-tai-gi" component={金融尬台語} />
        <Route path="name(/:senn)(/:mia)(/)" component={名姓} />
        <Route path="unsu" component={Unsu} />
        <Route path="hokbu" component={Hokbu} />
        <Route path="*" component={Kong} />
      </Route>
    </Router>
  </div>,
  root,
);

render(
  <Router history={history}>
    <Route path="/*" component={TshiuKiSuanTuann} />
  </Router>,
  document.getElementById('sidebar'),
);
