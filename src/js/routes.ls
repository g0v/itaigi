React = require 'react'
App = React.createFactory require './views/App'
SearchPage = require './views/SearchPage'
DiscussPage = require './views/DiscussPage'
SubmitPage = require './views/SubmitPage'
ToolPage = require './views/ToolPage'

render = (page = SearchPage) ->
  React.render (App {pageComponent: React.createFactory page}), document.getElementById 'taigi-app'

module.exports = routes = do
  "/":        -> render SearchPage
  "/search":  -> render SearchPage
  "/discuss": -> render DiscussPage
  "/submit":  -> render SubmitPage
  "/tool":    -> render ToolPage
