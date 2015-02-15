
React = require 'react'

{div, h1, a} = React.DOM

PhraseStore = require '../stores/PhraseStore'
RouteStore = require '../stores/RouteStore'

Page = React.createFactory require './Page'
SearchBox = React.createFactory require '../components/SearchBox'
TabularMenu = React.createFactory require '../components/TabularMenu'
{searchPhrase} = require '../actions/AppActionCreators'

module.exports = App = React.createClass do
  getInitialState: -> do
    query: ''
    page: RouteStore.getPage!
    phrases: PhraseStore.getAll!
  componentWillMount: ->
    PhraseStore.addChangeListener @_onChange
    RouteStore.addChangeListener @_onChange
    @setState do
      page: RouteStore.getPage!
      phrases: PhraseStore.getAll!
  componentWillUnmount: ->
    PhraseStore.removeChangeListener @_onChange
    RouteStore.removeChangeListener @_onChange
  _onChange: ->
    @setState do
      page: RouteStore.getPage!
      phrases: PhraseStore.getAll!
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
            Page {page: @state.page, phrases: @state.phrases}
