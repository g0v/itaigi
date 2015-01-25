
React = require 'react'

{div} = React.DOM

PhraseItem = React.createFactory require './PhraseItem'

module.exports = PhraseBox = React.createClass do
  render: ->
    div {id: "phrase-box"},
      @props.phrases.map (it, i) ->
        [] ++ (if i > 0 then div {className: "ui divider"}) ++ PhraseItem {phrase: it}
