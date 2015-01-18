{div} = React.DOM

SearchBar = React.createFactory require './SearchBar'
SearchResult = React.createFactory require './SearchResult'

module.exports = SearchPanel = React.createClass do
  render: ->
    div {id: "search-panel"},
      SearchBar!
      SearchResult!
