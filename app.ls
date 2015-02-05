require! <[express]>

port = 3000

is-dev = process.env.NODE_ENV isnt "production"

module.exports = app = express!
  ..listen port
app.use require('connect-livereload')! if is-dev
app.use express.static '_public'
process.stdout.write "App server listening at http://localhost:#port/\n"
