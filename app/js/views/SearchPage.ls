
React = require 'react'

{div, a} = React.DOM

PhraseBox = React.createFactory require '../components/PhraseBox'

module.exports = SearchPage = React.createClass do
  render: ->
    div {id: "search-page"},
      if @props.phrases.length > 0
        PhraseBox {phrases: @props.phrases}
