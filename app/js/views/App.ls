'use strict'

{div, h1} = React.DOM

SearchPanel = React.createFactory require './SearchPanel'
PhraseStore = require '../stores/PhraseStore'

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
  render: ->
    div {},
      div {id: "header"},
        h1 {} "ㄟ⋯⋯那個⋯⋯"
        div {id: "upper-menu"}
      div {className: "full height"}
        SearchPanel {phrases: @state.phrases}
