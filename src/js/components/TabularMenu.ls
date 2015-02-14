
React = require 'react'

{div, a} = React.DOM

module.exports = TabularMenu = React.createClass do
  handleClick: (event) ->
    @props.router.setRoute event.target.getAttribute('href')
    event.preventDefault!
    console.log @props.router
  render: ->
    div {className: "ui top attached tabular menu"},
      a {className: "item", activeClassName: "active", href: "/search", onClick: @handleClick} "怎樣講"
      a {className: "item", activeClassName: "active", href: "/discuss", onClick: @handleClick} "來討論"
      a {className: "item", activeClassName: "active", href: "/submit", onClick: @handleClick} "還不會"
      a {className: "item", activeClassName: "active", href: "/tool", onClick: @handleClick} "好工具"
