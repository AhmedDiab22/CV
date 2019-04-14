var gulp = require('gulp');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('sasss' , function () {
    return gulp.src('scss/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('css'))
  })

  gulp.task('css' , function () {
    return gulp.src('scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('css/r'))
  })

  gulp.task('js' , function () {
    return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js/jsnew'))
    })