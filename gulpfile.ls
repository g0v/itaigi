require! <[express gulp gulp-concat tiny-lr gulp-livereload]>

livereload-server = tiny-lr!
livereload-port = 35729
livereload = -> gulp-livereload livereload-server

try
  require! <[./conf]>
catch
  conf ||= do
    # API mock server
    API_URL: 'http://private-a4d9-taigineologism.apiary-mock.com'

require! <[gulp-livescript gulp-browserify liveify gulp-uglify gulp-replace]>

gulp.task 'js:app' ->
  gulp.src 'src/js/app.ls'
    .pipe gulp-livescript bare: true
    .pipe gulp-browserify do
      transform: <[liveify]>
      extensions: <[.ls]>
    #.pipe gulp-uglify!
    .pipe gulp-replace /\%\{(.*?)\}/g (,v) -> conf[v]
    .pipe gulp.dest '_public/js'
    .pipe livereload!

require! <[gulp-bower main-bower-files gulp-filter]>

gulp.task 'bower' ->
  gulp-bower!

gulp.task 'js:vendor' <[bower]> ->
  gulp.src main-bower-files!
    .pipe gulp-filter (.path is /\.js$/)
    .pipe gulp-concat 'vendor.js'
    .pipe gulp.dest '_public/js'
    .pipe livereload!

require! <[gulp-stylus]>

gulp.task 'css:app' ->
  gulp.src 'src/styles/*.styl'
    .pipe gulp-stylus!
    .pipe gulp-concat 'app.css'
    .pipe gulp.dest '_public/css'
    .pipe livereload!

gulp.task 'css:vendor' <[bower]> ->
  gulp.src main-bower-files!
    .pipe gulp-filter (.path is /\.css$/)
    .pipe gulp-concat 'vendor.css'
    .pipe gulp.dest '_public/css'
    .pipe livereload!

gulp.task 'css' <[css:app css:vendor]> ->

gulp.task 'assets:semantic-ui' <[bower]> ->
  gulp.src 'bower_components/semantic-ui/dist/themes/**/*'
    .pipe gulp.dest '_public/css/themes'

gulp.task 'assets' <[assets:semantic-ui]> ->

gulp.task 'template' ->
  gulp.src 'src/**/*.html'
    .pipe gulp.dest '_public'
    .pipe livereload!

gulp.task 'data' ->
  gulp.src 'src/**/*.csv'
    .pipe gulp.dest '_public'
    .pipe livereload!

gulp.task 'build' <[bower js:vendor js:app css assets template data]> ->

gulp.task 'watch' ->
  livereload-server.listen livereload-port, ->
    gulp.watch ['src/**/*.ls'] <[js:app]>
    gulp.watch ['src/**/*.styl'] <[css:app]>
    gulp.watch ['src/**/*.html'] <[template]>
    gulp.watch ['src/**/*.csv'] <[data]>

gulp.task 'dev' <[build watch]> ->
  require './app'

gulp.task 'app' <[build]> ->
  require './app'

gulp.task 'default' <[dev]> ->
