{div, input, button} = React.DOM

module.exports = SearchBar = React.createClass do
  render: ->
    div {id: "search-bar"},
      input {id: "search-input", placeholder: "例：水母"}
      button {} "台語怎樣講"
