React = require 'react'
App = React.createFactory require './views/App'
SearchPage = require './views/SearchPage'
DiscussPage = require './views/DiscussPage'
SubmitPage = require './views/SubmitPage'
ToolPage = require './views/ToolPage'

module.exports = routes = do
  _render: (page) ->
  "/":        -> routes._render SearchPage
  "/search":  -> routes._render SearchPage
  "/discuss": -> routes._render DiscussPage
  "/submit":  -> routes._render SubmitPage
  "/tool":    -> routes._render ToolPage
  _staticRoutes:
    "/":        SearchPage
    "/search":  SearchPage
    "/discuss": DiscussPage
    "/submit":  SubmitPage
    "/tool":    ToolPage
