
import React from 'react'
import Router, {Route, DefaultRoute} from 'react-router'
import App from './App/App'
import Kong from './Kong/Kong'
import Lun from './Lun/Lun'
import The from './The/The'
import Iong from './Iong/Iong'
import Mia from './Mia/Mia'

const routes = (
  <Route name='app' handler={App} path='/'>
    <Route name='kong' path='k/:k?' handler={Kong}/>
    <Route name='lun' path='l/:k?' handler={Lun}/>
    <Route name='the' path='t/:k?' handler={The}/>
    <Route name='iong' path='iong' handler={Iong}/>
    <Route name='mia' path='mia' handler={Mia}/>
    <DefaultRoute handler={Kong}/>
  </Route>
)

const root = document.getElementById('app')
Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(<Root/>, root)
})
