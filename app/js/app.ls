'use strict'

React = require 'react'
Router = require 'react-router'
Route = React.createFactory Router.Route
DefaultRoute = React.createFactory Router.DefaultRoute
NotFoundRoute = React.createFactory Router.NotFoundRoute
Redirect = React.createFactory Router.Redirect

SearchPage = React.createFactory require './views/SearchPage'
App = React.createFactory require './views/App'

routes = Route {handler: App, path: "/"},
  DefaultRoute {handler: SearchPage}

<- $
Handler <- Router.run routes
React.render (React.createFactory Handler)!, document.getElementById("taigi-app")
