'use strict'

React = require 'react'
Router = require 'react-router'
Routes = require './components/Routes'

<- $
Handler <- Router.run Routes
React.render (React.createFactory Handler)!, document.getElementById("taigi-app")
