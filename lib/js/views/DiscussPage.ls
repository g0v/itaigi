
React = require 'react'

{div, iframe} = React.DOM

module.exports = DiscussPage = React.createClass do
  render: ->
    div {id: "discuss-page"},
      iframe {id: "discuss-pad", src: "https://g0v.hackpad.com/moed7ct-taigi-neologism"}
