import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App/App';
import Kong from './Iah/Kong/Kong';
import Lun from './Iah/Lun/Lun';
import The from './Iah/The/The';
import Iong from './Iah/Iong/Iong';
import Mia from './Iah/Mia/Mia';
import About from './Iah/About/About';
import 抱去摸 from './Iah/主題/抱去摸';

import Debug from 'debug';
Debug.enable('itaigi:*');

const root = document.getElementById('app');

// if (window.location.pathname === '/') {
// render(<HuanGing/>, root)
// } else {
let history = browserHistory;
render(
  <Router history={history}>
    <Route path='/' component={App}>
      <IndexRoute component={Kong} />
      <Route path='k(/:k)' component={Kong} />
      <Route path='l(/:k)' component={Lun} />
      <Route path='t(/:k)' component={The} />
      <Route path='iong' component={Iong} />
      <Route path='mia' component={Mia} />
      <Route path='about' component={About} />
      <Route path='tsu-te/pho-khi-bong' component={抱去摸} />
      <Route path='*' component={Kong} />
    </Route>
  </Router>, root);

// }
