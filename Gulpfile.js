var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var babel = require('gulp-babel');

gulp.task('css', function() {
  return gulp.src('css/*.css')
  .pipe(postcss([
    cssnext()
  ]))
  .pipe(gulp.dest('dist/'))
})

gulp.task('js', function() {
  return gulp.src('js/*.js')
  .pipe(babel())
  .pipe(gulp.dest('dist/'))
})

gulp.task('default', ['css', 'js'])