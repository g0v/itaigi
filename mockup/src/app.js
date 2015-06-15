
import React from 'react'
import Router, {Route} from 'react-router'
import App from './App/App.jsx'

const routes = (
  <Route handler={App} path="/"></Route>
  )

const root = document.getElementById('app')
Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(<Root/>, root)
})
