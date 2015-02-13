require! <[http url fs]>
React = require 'react'
App = React.createFactory require './src/js/views/App'

port = 3000

is-dev = process.env.NODE_ENV isnt "production"

http.createServer (req, res) ->
  path = url.parse req.url .pathname .replace /^\//, ''
  path ||= 'index.html'
  err, data <- fs.readFile "_public/#path"
  if err
    err, data <- fs.readFile "_public/index.html"
    res.writeHead 200, {}
    res.end data
  else
    res.writeHead 200, {}
    res.end data
.listen port
process.stdout.write "App server listening at http://localhost:#port/\n"
