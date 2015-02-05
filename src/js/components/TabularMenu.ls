
React = require 'react'

{div, a} = React.DOM

module.exports = TabularMenu = React.createClass do
  render: ->
    div {className: "ui top attached tabular menu"},
      a {className: "item", activeClassName: "active", href: "#/search"} "怎樣講"
      a {className: "item", activeClassName: "active", href: "#/discuss"} "來討論"
      a {className: "item", activeClassName: "active", href: "#/submit"} "還不會"
      a {className: "item", activeClassName: "active", href: "#/tool"} "好工具"
