
import React from 'react'
import Router, {Route, DefaultRoute} from 'react-router'
import HuanGing from './Iah/HuanGing/HuanGing'
import App from './App/App'
import Kong from './Iah/Kong/Kong'
import Lun from './Iah/Lun/Lun'
import The from './Iah/The/The'
import Iong from './Iah/Iong/Iong'
import Mia from './Iah/Mia/Mia'
import './app.css'

import Debug from 'debug'
Debug.enable('itaigi:*')

const routes = (
  <Route name='app' handler={App} path='/'>
    <DefaultRoute handler={Kong}/>
    <Route name='kong' path='k/?:k?' handler={Kong}/>
    <Route name='lun' path='l/?:k?' handler={Lun}/>
    <Route name='the' path='t/?:k?' handler={The}/>
    <Route name='iong' path='iong' handler={Iong}/>
    <Route name='mia' path='mia' handler={Mia}/>
  </Route>
)

const root = document.getElementById('app')
if (window.location.pathname === '/') {
  React.render(<HuanGing/>, root)
} else {
  Router.run(routes, Router.HistoryLocation, (Root) => {
    React.render(<Root/>, root)
  })
}
