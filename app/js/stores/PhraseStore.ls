'use strict'

require! <[events ../dispatcher/AppDispatcher ../constants/AppConstants]>

var _query
_phrases =
  * "流水號": "要衝"
    "華語": "要衝"
    "漢字": "iau3-tshiong"
    "台羅": "台文華文線頂辭典"
    "出處": null
    "理由": null
  * "流水號": "要旨"
    "華語": "要旨"
    "漢字": "iau3-tsi2"
    "台羅": "台文華文線頂辭典"
    "出處": null
    "理由": null
  * "流水號": "要職"
    "華語": "要職"
    "漢字": "iau3-tsit"
    "台羅": "台文華文線頂辭典"
    "出處": null
    "理由": null
  * "流水號": "要害"
    "華語": "要害"
    "漢字": "iau3-hai7"
    "台羅": "台文華文線頂辭典"
    "出處": null
    "理由": null
  * "流水號": "要項"
    "華語": "要項"
    "漢字": "iau3-hang7"
    "台羅": "台文華文線頂辭典"
    "出處": null
    "理由": null
  * "流水號": "要犯"
    "華語": "要犯"
    "漢字": "iau3-huann7"
    "台羅": "台文華文線頂辭典"
    "出處": null
    "理由": null
  * "流水號": "要人"
    "華語": "要人"
    "漢字": "iau3-jinn5"
    "台羅": "台文華文線頂辭典"
    "出處": null
    "理由": null

module.exports = PhraseStore = new events.EventEmitter! <<< do
  emitChange: ->
    @emit AppConstants.CHANGE_EVENT
  addChangeListener: (callback) ->
    @on AppConstants.CHANGE_EVENT, callback
  removeChangeListener: (callback) ->
    @removeListener CHANGE_EVENT, callback
  getAll: ->
    if _query then _phrases.filter (-> (it["華語"].indexOf _query) >= 0) else _phrases

PhraseStore.dispatchToken = AppDispatcher.register ({action}) ->
  switch action.type
    | AppConstants.SEARCH_PHRASE =>
      _query := action.query
      PhraseStore.emitChange!
  true
