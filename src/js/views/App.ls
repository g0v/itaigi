
React = require 'react'
SearchPage = require './SearchPage'

{div, h1, a} = React.DOM

PhraseStore = require '../stores/PhraseStore'

SearchBox = React.createFactory require '../components/SearchBox'
TabularMenu = React.createFactory require '../components/TabularMenu'
{searchPhrase} = require '../actions/AppActionCreators'

module.exports = App = React.createClass do
  componentWillMount: ->
    PhraseStore.addChangeListener @_onChange
    @setState do
      phrases: @getPhraseState!
  componentWillUnmount: ->
    PhraseStore.removeChangeListener @_onChange
  _onChange: -> @setState do
    phrases: @getPhraseState!
  getPhraseState: -> PhraseStore.getAll!
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
    div {},
      div {id: "header", className: "fixed"},
        div {className: "container"},
          h1 {} "ㄟ⋯⋯那個⋯⋯"
          SearchBox {
            query: @state.query
            handleInput: @handleSearchInput
            handleSubmit: @handleSearch
            handleClear: @handleSearchClear
          }
      div {className: "full height container"},
        div {className: "container"},
          TabularMenu!
          div {className: "ui bottom attached segment"},
            @props.pageComponent {phrases: @state.phrases}
