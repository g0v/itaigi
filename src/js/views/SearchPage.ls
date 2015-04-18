
React = require 'react'

{div, a} = React.DOM

PhraseBox = React.createFactory require '../components/PhraseBox'

module.exports = SearchPage = React.createClass do
  render: ->
    console.log(@props.phrases)
    div {id: "search-page"},
      if @props.phrases
        PhraseBox {phrases: @props.phrases}
