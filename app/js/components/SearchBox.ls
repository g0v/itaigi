{div, input, button, i} = React.DOM

module.exports = SearchBox = React.createClass do
  handleKeyDown: (event) ->
    if event.which == 13
      @props.handleSubmit event
  render: ->
    div {id: "search-box", className: "ui left aligned raised segment"},
      div {className: "ui action left icon input"},
        if @props.query
          i {className: "remove circle icon", onClick: @props.handleClear}
        input {id: "search-input", type: "text", placeholder: "例：水母", value: @props.query, onChange: @props.handleInput, onKeyDown: @handleKeyDown}
        div {id: "search-submit", className: "ui purple button", onClick: @props.handleSubmit},
          "怎樣講"
