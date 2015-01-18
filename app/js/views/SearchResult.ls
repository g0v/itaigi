{div} = React.DOM

PhraseItem = React.createFactory require './PhraseItem'

module.exports = SearchResult = React.createClass do
  render: ->
    div {id: "search-result"},
      @props.phrases.map -> PhraseItem {phrase: it}
