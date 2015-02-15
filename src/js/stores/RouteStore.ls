
require! <[./Store events ../dispatcher/AppDispatcher ../constants/AppConstants
  ../views/SearchPage
  ../views/DiscussPage
  ../views/SubmitPage
  ../views/ToolPage
]>

_route = location?pathname || "/"

module.exports = RouteStore = Store <<< do
  setRoute: -> _route := it
  getRoute: -> _route
  getPageName: -> @getRoute!.substr(1).replace /\/.*/, ''
  getPage: -> switch @getPageName!
    | "search" => SearchPage
    | "discuss" => DiscussPage
    | "submit" => SubmitPage
    | "tool" => ToolPage
    | otherwise => SearchPage

RouteStore.dispatchToken = AppDispatcher.register ({action}) ->
  switch action.type
    | AppConstants.CHANGE_ROUTE =>
      _route := action.route
      if history then history.pushState null, null, _route
      RouteStore.emitChange!
  true
