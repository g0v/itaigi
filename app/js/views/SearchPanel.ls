{div} = React.DOM

require! <[superagent]>
SearchBox = React.createFactory require './SearchBox'
SearchResult = React.createFactory require './SearchResult'
{searchPhrase} = require '../actions/AppActionCreators'

module.exports = SearchPanel = React.createClass do
  getInitialState: -> do
    query: ''
  handleSearchInput: (event) ->
    @setState do
      query: event.target.value
  handleSearch: (event) ->
    searchPhrase @state.query
  render: ->
    div {id: "search-panel", className: "ui center aligned segment"},
      SearchBox {
        query: @state.query
        handleInput: @handleSearchInput
        handleSubmit: @handleSearch
      }
      SearchResult {phrases: @props.phrases}
