var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var sass = require('gulp-sass'),
    combineMq = require('gulp-combine-mq'),
    csso = require('gulp-csso'),
    cleanCss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer');
var postcss = require('gulp-postcss'),
    importCss = require('postcss-import'),
    reporter = require('postcss-reporter'),
    immutableCss = require('immutable-css');

gulp.task('immutable', function () {
  var processors = [
    importCss,
    immutableCss({
      strict: true,
      // verbose: true,
      ignoredClasses: ['.cf', '.input-reset', '.link']
    }),
    reporter({
      clearMessages: true,
      throwError: false,
    })
  ]

  gulp.src('dist/tachyons.css')
    .pipe(postcss(processors))
    // .pipe(gulp.dest('dist/immutable'))
})

gulp.task('styles', function(){
  gulp.src(['src/**/*.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass({
      precision: 4,
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
