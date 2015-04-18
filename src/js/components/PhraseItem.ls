
React = require 'react'

{div, p} = React.DOM

module.exports = PhraseItem = React.createClass do
  render: ->
    div {className: "phrase-item"},
      div {className: "ui header"},
        div {className: "content"} @props.phrase["語言腔口"]
        div {className: "sub header roman"} @props.phrase["外語語言"]
      p {className: "description"} @props.phrase["外語資料"]
      #div {className: "ui tag label source"} @props.phrase["source"]
