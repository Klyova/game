'use strict';


let gulp = require('gulp');
 let concat  = require('gulp-concat');
let sass = require('gulp-sass');
sass.compiler = require('node-sass');
var pug = require('gulp-pug');
let  imagemin = require('gulp-imagemin');
const minify = require('gulp-minify');

gulp.task('sass', function () {
   return gulp.src('scss/style.sass')
   .pipe(sass().on('error', sass.logError))
   .pipe(concat('css.css'))
	.pipe(minify())
   .pipe(gulp.dest('build/css'))
});

gulp.task('pug', function buildHTML() {
  return gulp.src('index.pug')
  .pipe(pug({
      pretty: true
    }))
 .pipe(concat('index.html'))
   .pipe(gulp.dest("build"))
});




gulp.task('images', function() {
    gulp.src('i/**/*') 
        .pipe(imagemin()) 
        .pipe(gulp.dest('build/i')) 

});


gulp.task('js', function() {
  gulp.src('js/local.js')
    .pipe(minify())

    .pipe(gulp.dest('build/js'))
});



