var path = require('../config'),
    plumber = require('gulp-plumber'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    cmq = require('gulp-combine-media-queries');


// Styles
gulp.task('styles', function () {

    return gulp.src(path.styles.src)

        .pipe(sass().on('error', sass.logError))

        .pipe(autoprefixer({
            browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12', 'ios 6', 'android 4'],
            cascade: false
        }))

        .pipe(cmq({ log: true })) // Combine the media queries

        .pipe(minifyCSS({keepBreaks:false}))

        .pipe(gulp.dest(path.styles.dest));
});