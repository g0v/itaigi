
import React from 'react'
import Router, {Route, DefaultRoute} from 'react-router'
import App from './App/App'
import Kong from './Iah/Kong/Kong'
import Home from './Home/Home'
import Lun from './Iah/Lun/Lun'
import The from './Iah/The/The'
import Iong from './Iah/Iong/Iong'
import Mia from './Iah/Mia/Mia'

import Debug from 'debug'
Debug.enable('itaigi:*')

const routes = (
  <Route name='app' handler={App} path='/'>
    <Route name='kong' path='k/?:k?' handler={Kong}/>
    <Route name='lun' path='l/?:k?' handler={Lun}/>
    <Route name='the' path='t/?:k?' handler={The}/>
    <Route name='iong' path='iong' handler={Iong}/>
    <Route name='mia' path='mia' handler={Mia}/>
    <DefaultRoute handler={Home}/>
  </Route>
)

const root = document.getElementById('app')
Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(<Root/>, root)
})
