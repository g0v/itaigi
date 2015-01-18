'use strict'

require! <[../constants/AppConstants]>
{Dispatcher} = require "flux"

module.exports = AppDispatcher = new Dispatcher! <<< do
  handleServerAction: (action) ->
    @dispatch {action} <<< do
      source: AppConstants.SOURCE_SERVER_ACTION
  handleViewAction: (action) ->
    @dispatch {action} <<< do
      source: AppConstants.SOURCE_VIEW_ACTION
  handleRouterAction: (action) ->
    @dispatch {action} <<< do
      source: AppConstants.SOURCE_ROUTER_ACTION
