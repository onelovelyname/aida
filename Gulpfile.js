let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let uglify = require('gulp-uglify');
var purify = require('gulp-purifycss');
let pipeline = require('readable-stream').pipeline;
var brotli = require('gulp-brotli');
var gzip = require('gulp-gzip');


gulp.task('default', function() {
  gulp.watch('./public/src/**/*.css', function(evt) {
    gulp.task('css');
    gulp.task('minify-css');
  });
  gulp.watch('./public/src/**/*.js', function(evt) {
    gulp.task('css');
    gulp.task('compress');
  });
});

gulp.task('css', function() {
  return gulp.src('./public/src/stylesheets/*.css')
    .pipe(purify(['./public/src/javascripts/*.js', './views/*.pug', './views/**/*.pug', './public/src/stylesheets/*.js']))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./public/dist/stylesheets'));
});

gulp.task('compress', function () {
  return gulp.src('public/src/javascripts/*.js')
    .pipe(uglify())
    .pipe(gzip())
    //.pipe(brotli.compress())
    .pipe(gulp.dest('public/dist/javascripts'));
});
