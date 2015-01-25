
React = require 'react'
Router = require 'react-router'

{div} = React.DOM

PhraseBox = React.createFactory require '../components/PhraseBox'

module.exports = SearchPanel = React.createClass do
  render: ->
    div {id: "search-page", className: "ui center aligned segment"},
      PhraseBox {phrases: @props.phrases}
