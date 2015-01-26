
React = require 'react'

{div, a} = React.DOM

PhraseBox = React.createFactory require '../components/PhraseBox'

module.exports = SearchPage = React.createClass do
  render: ->
    div {id: "search-page"},
      div {className: "container"},
        if @props.phrases.length > 0 then [
          div {className: "ui top attached tabular menu"},
            a {className: "active item"} "怎樣講"
          div {className: "ui bottom attached segment"},
            PhraseBox {phrases: @props.phrases}
        ]
