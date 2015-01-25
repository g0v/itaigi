
React = require 'react'

{div, p} = React.DOM

module.exports = PhraseItem = React.createClass do
  render: ->
    div {className: "phrase-item"},
      div {className: "ui header"},
        div {className: "content"} @props.phrase["漢字"]
        div {className: "sub header roman"} @props.phrase["台羅"]
      p {className: "description"} @props.phrase["華語"]
      p {className: "rationale"} @props.phrase["理由"]
      div {className: "ui tag label source"} @props.phrase["出處"]
