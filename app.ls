require! <[http director]>
React = require 'react'
App = React.createFactory require './src/js/views/App'

port = 3000

is-dev = process.env.NODE_ENV isnt "production"

routes = require 'src/js/routes'
routes._render = (page) ->
  @res.writeHead 200, 'Content-Type': 'text/html'
  @res.end
router = new director.http.Router routes

#module.exports = app = express!
  #..listen port
#app.use require('connect-livereload')! if is-dev
#app.use express.static '_public'
process.stdout.write "App server listening at http://localhost:#port/\n"
