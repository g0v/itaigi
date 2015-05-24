import React from 'react'
import App from './App/App.jsx'
import Router, {Route} from 'react-router'

var scripts = document.getElementsByTagName("script");
var src = scripts[scripts.length - 1].getAttribute("src");
window.__webpack_public_path__ = src.substr(0, src.lastIndexOf("/") + 1);

const routes = (
  <Route handler={App} path="/">
  </Route>
);

var root = document.getElementById('root');
Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, root);
});
