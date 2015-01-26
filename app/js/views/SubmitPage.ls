
React = require 'react'

{div} = React.DOM

module.exports = SubmitPage = React.createClass do
  render: ->
    div {id: "submit-page"} "我要提供講法"
