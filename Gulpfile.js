let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let uglify = require('gulp-uglify');
var purify = require('gulp-purifycss');
let pipeline = require('readable-stream').pipeline;

//We create a 'default' task that will run when we run `gulp` in the project
gulp.task('default', function() {
// We use `gulp.watch` for Gulp to expect changes in the files to run again
  gulp.watch('./public/stylesheets/*.css', function(evt) {
    gulp.task('css');
    gulp.task('minify-css');
    gulp.task('compress');
  });
});

gulp.task('css', function() {
  return gulp.src('./public/src/stylesheets/*.css')
    .pipe(purify(['./public/src/javascripts/*.js', './views/*.pug', './views/**/*.pug']))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./public/dist/stylesheets'));
});

gulp.task('compress', function () {
  return pipeline(
    gulp.src('public/src/javascripts/*.js'),
    uglify(),
    gulp.dest('public/dist/javascripts')
  );
});
