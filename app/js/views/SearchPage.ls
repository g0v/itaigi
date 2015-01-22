
{div} = React.DOM

SearchBox = React.createFactory require '../components/SearchBox'
PhraseBox = React.createFactory require '../components/PhraseBox'
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
    div {id: "search-page", className: "ui center aligned segment"},
      SearchBox {
        query: @state.query
        handleInput: @handleSearchInput
        handleSubmit: @handleSearch
      }
      PhraseBox {phrases: @props.phrases}
