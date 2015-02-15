
React = require 'react'
RouteStore = require '../stores/RouteStore'
{changeRoute} = require '../actions/AppActionCreators'

{div, a} = React.DOM

module.exports = TabularMenu = React.createClass do
  componentWillMount: ->
    RouteStore.addChangeListener @_onChange
    @setState do
      pageName: RouteStore.getPageName!
  componentWillUnmount: ->
    RouteStore.removeChangeListener @_onChange
  _onChange: -> @setState do
    pageName: RouteStore.getPageName!
  _activeClass: (name) ->
    if name == @state.pageName then "active" else ""
  handleClick: (event) ->
    changeRoute event.target.getAttribute('href')
    event.preventDefault!
  render: ->
    div {className: "ui top attached tabular menu"},
      a {className: "item #{@_activeClass('search')}", href: "/search", onClick: @handleClick} "怎樣講"
      a {className: "item #{@_activeClass('discuss')}", href: "/discuss", onClick: @handleClick} "來討論"
      a {className: "item #{@_activeClass('submit')}", href: "/submit", onClick: @handleClick} "還不會"
      a {className: "item #{@_activeClass('tool')}", href: "/tool", onClick: @handleClick} "好工具"
