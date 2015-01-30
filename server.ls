'use strict'

require! <[express]>
port = 3000
app = express!
  .use require('connect-livereload')!
  .use '/' express.static '_public'
console.log "Running on http://localhost:#port"
app.listen port
