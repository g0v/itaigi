
require! <[events ../dispatcher/AppDispatcher ../constants/AppConstants]>


var _query
var _phrases
_phrases := []
/*
{
    "流水號": "",
    "華語": "要衝",
    "漢字": "要衝",
    "台羅": "iau3-tshiong",
    "出處": "台文華文線頂辭典",
    "理由": ""
  }
*/

SERVER_URL = "http://localhost:8001"

fetch_phrases = ->
  url = SERVER_URL + '/api/suggestions/' + _query
  jQuery.get url,'', (data,) ->
    if data.status == 'ok'
      _phrases := data.results
      PhraseStore.emitChange!
    console.log(data)



module.exports = PhraseStore = new events.EventEmitter! <<< do
  emitChange: ->
    @emit AppConstants.CHANGE_EVENT
  addChangeListener: (callback) ->
    @on AppConstants.CHANGE_EVENT, callback
  removeChangeListener: (callback) ->
    @removeListener CHANGE_EVENT, callback
  getAll: ->
    return _phrases

PhraseStore.dispatchToken = AppDispatcher.register ({action}) ->
  switch action.type
    | AppConstants.SEARCH_PHRASE =>
      _query := action.query
      fetch_phrases!
      # PhraseStore.emitChange
  true
