'use strict'

require! <[director ./routes]>
React = require 'react'
App = React.createFactory require './views/App'

router = new director.Router routes
  .configure {html5history: true}
  .init!
routes._render = (page) ->
  React.render (App {router, pageComponent: React.createFactory page}), document.getElementById 'taigi-app'

<- $
path = window.location.toString!.replace /.*\//, '/'
React.render (App {router, pageComponent: React.createFactory routes._staticRoutes[path]}), document.getElementById 'taigi-app'
