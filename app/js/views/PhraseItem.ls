{div} = React.DOM

module.exports = PhraseItem = React.createClass do
  render: ->
    div {className: "phrase-item ui vertical segment"},
      for key, val of @props.phrase
        div {className: "field"},
          div {className: "field-label"} key
          div {className: "field-value"} val
