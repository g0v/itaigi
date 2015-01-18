'use strict'

{div, h1} = React.DOM

SearchPanel = React.createFactory require './views/SearchPanel'
PhraseStore = require './stores/PhraseStore'

TaigiApp = React.createFactory React.createClass do
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
      SearchPanel {phrases: @state.phrases}

<- $
React.render TaigiApp!, document.getElementById("taigi-app")
