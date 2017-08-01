var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var twig = require('gulp-twig');
var concat = require('gulp-concat');

gulp.task('css', function () {
  var processors = [
    autoprefixer({browsers: ['last 1 version']}),
  ];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist'));
});

gulp.task('templates', function() {
    return gulp.src('src/*.html')
        .pipe(twig())
        .pipe(gulp.dest('dist'));
});


gulp.task('concatCss', function() {
  return gulp.src('./src/css/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('concatJs', function() {
  return gulp.src('./src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', function() {
  gulp.watch('./src/js/*.js', ['concatJs'])
  gulp.watch('./src/css/*.css', ['css', 'concatCss'])
  gulp.watch(['./src/*.html', './src/partials/*.html'], ['templates'])
});
