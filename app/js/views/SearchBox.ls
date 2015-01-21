{div, input, button, i} = React.DOM

module.exports = SearchBox = React.createClass do
  handleSearch: (event) ->

  render: ->
    div {id: "search-box", className: "ui action left icon input"},
      i {className: "search icon"}
      input {id: "search-input", type: "text", placeholder: "例：水母", value: @props.query, onChange: @props.handleInput}
      div {id: "search-submit", className: "ui purple button", onClick: @props.handleSubmit} "台語怎樣講"
