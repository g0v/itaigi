
import React from 'react'
import Router, {Route, DefaultRoute} from 'react-router'
import App from './App/App'
import Kong from './Kong/Kong'

const routes = (
  <Route name='app' handler={App} path='/'>
    <Route name='kong' path='k/:k' handler={Kong}/>
    <Route name='lun' path='l' handler={Kong}/>
    <Route name='the' path='t' handler={Kong}/>
    <Route name='iong' path='iong' handler={Kong}/>
    <Route name='mia' path='mia' handler={Kong}/>
    <DefaultRoute handler={Kong}/>
  </Route>
)

const root = document.getElementById('app')
Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(<Root/>, root)
})
