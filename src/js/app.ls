'use strict'

require! <[director ./routes]>
React = require 'react'
App = React.createFactory require './views/App'
SearchPage = React.createFactory require './views/SearchPage'

router = new director.Router routes
  .configure {html5history: true}
  .init!
routes._render = (page) ->
  React.render (App {router, pageComponent: React.createFactory page}), document.getElementById 'taigi-app'

<- $
React.render (App {router, pageComponent: SearchPage}), document.getElementById 'taigi-app'
