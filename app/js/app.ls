'use strict'

{div, span} = React.DOM

TaigiApp = React.createFactory React.createClass do
  render: ->
    div {className: "hello"} "foo"

<- $
React.render TaigiApp!, document.getElementById("taigi-app")
