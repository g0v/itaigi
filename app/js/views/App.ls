
React = require 'react'
Router = require 'react-router'
RouteHandler = React.createFactory Router.RouteHandler
Link = React.createFactory Router.Link

{div, h1, a} = React.DOM

PhraseStore = require '../stores/PhraseStore'

SearchBox = React.createFactory require '../components/SearchBox'
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
          div {className: "ui top attached tabular menu"},
            Link {className: "item", activeClassName: "active", to: "search"} "怎樣講"
            Link {className: "item", activeClassName: "active", to: "discuss"} "來討論"
          RouteHandler {phrases: @state.phrases}
