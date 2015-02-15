
React = require 'react'
{div} = React.DOM

module.exports = Page = React.createClass do
  render: ->
    (React.createFactory @props.page) {phrases: @props.phrases}
