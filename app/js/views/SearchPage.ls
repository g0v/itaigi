
React = require 'react'
Router = require 'react-router'

{div} = React.DOM

SearchBox = React.createFactory require '../components/SearchBox'
PhraseBox = React.createFactory require '../components/PhraseBox'
{searchPhrase} = require '../actions/AppActionCreators'

module.exports = SearchPanel = React.createClass do
  mixins: [Router.State]
  getInitialState: -> do
    query: ''
  handleSearchInput: (event) ->
    @setState query: event.target.value
  handleSearchClear: (event) ->
    <- @setState query: null
    @handleSearch event
  handleSearch: (event) ->
    searchPhrase @state.query
  render: ->
    div {id: "search-page", className: "ui center aligned segment"},
      SearchBox {
        query: @state.query
        handleInput: @handleSearchInput
        handleSubmit: @handleSearch
        handleClear: @handleSearchClear
      }
      PhraseBox {phrases: @props.phrases}
