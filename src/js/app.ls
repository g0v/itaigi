'use strict'

require! <[director ./routes]>
React = require 'react'
App = require './views/App'
SearchPage = require './views/SearchPage'

router = new director.Router routes
  #.configure {html5history: true}

<- $
router.init!
