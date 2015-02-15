'use strict'

React = require 'react'
App = React.createFactory require './views/App'

<- $
React.render App!, document.getElementById 'taigi-app'
