var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var sass = require('gulp-sass'),
    combineMq = require('gulp-combine-mq'),
    csso = require('gulp-csso'),
    cleanCss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('styles', function(){
  gulp.src(['src/**/*.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass({
      precision: 3,
    }))
    .pipe(autoprefixer({
        browsers: ['>= 0%'],
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(combineMq({
  		beautify: true,
  	}))
    .pipe(cleanCss({

    }))
    .pipe(csso({
      debug: true,
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/min/'))
});


gulp.task('default', function(){
  gulp.watch("src/styles/**/*.scss", ['styles']);
});
