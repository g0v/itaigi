{div} = React.DOM

module.exports = PhraseItem = React.createClass do
  render: ->
    div {className: "phrase-item"},
      for key, val of @props.phrase
        div {className: "field"},
          div {className: "field-label"} key
          div {className: "field-value"} val
