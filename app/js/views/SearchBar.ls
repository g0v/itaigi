{div, input, button} = React.DOM

module.exports = SearchBar = React.createClass do
  handleSearch: (event) ->

  render: ->
    div {id: "search-bar"},
      input {id: "search-input", placeholder: "例：水母", value: @props.query, onChange: @props.handleInput}
      button {id: "search-submit", onClick: @props.handleSubmit} "台語怎樣講"
