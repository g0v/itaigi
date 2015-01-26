
React = require 'react'
Router = require 'react-router'
Route = React.createFactory Router.Route
DefaultRoute = React.createFactory Router.DefaultRoute
NotFoundRoute = React.createFactory Router.NotFoundRoute
Redirect = React.createFactory Router.Redirect

SearchPage = require '../views/SearchPage'
DiscussPage = require '../views/DiscussPage'
SubmitPage = require '../views/SubmitPage'
App = require '../views/App'

module.exports = Routes = Route {handler: App, path: "/"},
  DefaultRoute {handler: SearchPage}
  Route {name: "search", path: "/search", handler: SearchPage}
  Route {name: "discuss", path: "/discuss", handler: DiscussPage}
  Route {name: "submit", path: "/submit", handler: SubmitPage}
