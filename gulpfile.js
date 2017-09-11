var gulp = require('gulp'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean'),
    watch = require('gulp-watch');

gulp.task('hello', function() {
  console.log("ello guv'nor")
})

gulp.task('deleteCss', function (){
  return gulp.src('src/components/header/**/*.css', {read: false})
    .pipe(clean())
})

gulp.task('sass', ['deleteCss'], function() {
  return gulp.src('src/components/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/components/'))
})

gulp.task('compile', ['sass'], function() {
  gulp.watch('src/components/**/*.scss', function() {
    gulp.run('sass')
  })
})
