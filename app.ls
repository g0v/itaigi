require! <[http url fs]>
React = require 'react'
routes = require './src/js/routes'
App = React.createFactory require './src/js/views/App'

port = 3000

is-dev = process.env.NODE_ENV isnt "production"

http.createServer (req, res) ->
  path = url.parse req.url .pathname
  path ||= '/index.html'
  err, data <- fs.readFile "_public/#{path.replace /^\//, ''}"
  if err
    err, data <- fs.readFile "_public/index.html", "utf-8"
    data .= replace /<div id="taigi-app"><\/div>/,
      '<div id="taigi-app">' +
        React.renderToString App {pageComponent: React.createFactory routes._staticRoutes[path]}
      + '</div>'
    res.writeHead 200, {}
    res.end data
  else
    res.writeHead 200, {}
    res.end data
.listen port
process.stdout.write "App server listening at http://localhost:#port/\n"
