
React = require 'react'

{div, a} = React.DOM

PhraseBox = React.createFactory require '../components/PhraseBox'

module.exports = SearchPage = React.createClass do
  render: ->
    if @props.phrases.length > 0
      div {className: "ui bottom attached segment"},
        div {id: "search-page"},
          PhraseBox {phrases: @props.phrases}
    else
      div {}
