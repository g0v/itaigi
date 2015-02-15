
require! <[events ../constants/AppConstants]>

module.exports = Store = new events.EventEmitter! <<< do
  emitChange: ->
    @emit AppConstants.CHANGE_EVENT
  addChangeListener: (callback) ->
    @on AppConstants.CHANGE_EVENT, callback
  removeChangeListener: (callback) ->
    @removeListener CHANGE_EVENT, callback
