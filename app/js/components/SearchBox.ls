{div, input, button, i} = React.DOM

module.exports = SearchBox = React.createClass do
  render: ->
    div {id: "search-box", className: "ui left aligned raised segment"},
      div {className: "ui header"} "台語的⋯⋯"
      div {className: "ui action left icon input"},
        i {className: "search icon"}
        input {id: "search-input", type: "text", placeholder: "例：水母", value: @props.query, onChange: @props.handleInput}
        div {id: "search-submit", className: "ui purple button", onClick: @props.handleSubmit} "怎樣講"
