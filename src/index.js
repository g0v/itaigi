
import React from 'react'
import Router, {Route, DefaultRoute, RouteHandler} from 'react-router'
import HuanGing from './Iah/HuanGing/HuanGing'
import SuIong from './Iah/SuIong/SuIong'
import Kong from './Iah/Kong/Kong'
import Lun from './Iah/Lun/Lun'
import The from './Iah/The/The'
import Iong from './Iah/Iong/Iong'
import Mia from './Iah/Mia/Mia'
import './app.css'

import Debug from 'debug'
Debug.enable('itaigi:*')

class App extends React.Component {
  render () {
    return <RouteHandler {...this.props}/>
  }
}

const routes = (
  <Route name='app' handler={App} path='/'>
    <DefaultRoute name='huanging' handler={HuanGing} path='h'/>
    <Route name='suiong' handler={SuIong} path='/'>
      <Route name='kong' path='k/?:k?' handler={Kong}/>
      <Route name='lun' path='l/?:k?' handler={Lun}/>
      <Route name='the' path='t/?:k?' handler={The}/>
      <Route name='iong' path='iong' handler={Iong}/>
      <Route name='mia' path='mia' handler={Mia}/>
    </Route>
  </Route>
)

const root = document.getElementById('app')
Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(<Root/>, root)
})
