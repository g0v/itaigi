
require! <[./Store events ../dispatcher/AppDispatcher ../constants/AppConstants superagent]>

var _query
var _phrases

token = (t) ->
  (req) ->
    req.set 'X-CSRFToken', t
    req

var CSRF, fetch_phrases

_phrases := {}

SERVER_URL = "%{API_URL}"

module.exports = PhraseStore = Store <<< do
  getAll: ->
    return _phrases

PhraseStore.dispatchToken = AppDispatcher.register ({action}) ->
  switch action.type
    | AppConstants.SEARCH_PHRASE =>
      _query := action.query
      fetch_phrases!
  true

err, res <- superagent SERVER_URL + '/看csrf'
return console.log err if err

CSRF = res.csrftoken

fetch_phrases := ->
  url = SERVER_URL + '/揣/外語請教條?關鍵字=' + _query
  superagent url
    .use token CSRF
    .end (err, data) ->
      return console.log err if err
      if data.ok
        _phrases := data.body
        PhraseStore.emitChange!
