'use strict'

{div, h1} = React.DOM

SearchPanel = React.createFactory require './views/SearchPanel'

TaigiApp = React.createFactory React.createClass do
  render: ->
    div {},
      div {id: "header"},
        h1 {} "ㄟ⋯⋯那個⋯⋯"
        div {id: "upper-menu"}
      SearchPanel!

<- $
React.render TaigiApp!, document.getElementById("taigi-app")
