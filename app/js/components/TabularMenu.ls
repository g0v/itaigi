
React = require 'react'
Router = require 'react-router'
Link = React.createFactory Router.Link

{div} = React.DOM

module.exports = TabularMenu = React.createClass do
  render: ->
    div {className: "ui top attached tabular menu"},
      Link {className: "item", activeClassName: "active", to: "search"} "怎樣講"
      Link {className: "item", activeClassName: "active", to: "discuss"} "來討論"
      Link {className: "item", activeClassName: "active", to: "submit"} "還不會"
