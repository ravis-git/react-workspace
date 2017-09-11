var gulp = require('gulp'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean'),
    watch = require('gulp-watch');

gulp.task('hello', function() {
  console.log("ello guv'nor")
})

gulp.task('deleteCss', function (){
  return gulp.src('src/**/*.css', {read: false})
    .pipe(clean())
})

gulp.task('sass', ['deleteCss'], function() {
  return gulp.src('src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/'))
})

gulp.task('compile', ['sass'], function() {
  gulp.watch('src/**/*.scss', function() {
    gulp.run('sass')
  })
})
