
React = require 'react'

{div, p} = React.DOM

module.exports = PhraseItem = React.createClass do
  render: ->
    div {className: "phrase-item"},
      div {className: "ui header"},
        div {className: "content"} @props.phrase["sinograms"]
        div {className: "sub header roman"} @props.phrase["romanization"]
      p {className: "description"} @props.phrase["question"]
      p {className: "rationale"} @props.phrase["justification"]
      div {className: "ui tag label source"} @props.phrase["source"]
