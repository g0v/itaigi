
require! <[../constants/AppConstants ../dispatcher/AppDispatcher]>

module.exports = do
  searchPhrase: (query) ->
    AppDispatcher.handleViewAction {query} <<< do
      type: AppConstants.SEARCH_PHRASE
  changeRoute: (route) ->
    AppDispatcher.handleRouterAction {route} <<< do
      type: AppConstants.CHANGE_ROUTE
