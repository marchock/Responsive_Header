// /************************
// Gulp - Installation Instructions

// To install Gulp globally:
// $ npm install gulp -g

// To install  devloper dependencies automatically (Requires up to data package.json):
// $ npm install


var path = require('./gulp/config'),
    gulp = require('gulp'),
    watch = require('gulp-watch'),
    requireDir = require('require-dir');

requireDir('./gulp');
requireDir('./gulp/tasks');

// Build preduction
gulp.task('default', ['clean'], function() {
    gulp.start("copy", "styles");
    //util.log('default task executed.');
});

gulp.task('watch', function () {
    gulp.watch(path.styles.src, ['styles']);
    gulp.watch(path.src + "/*.html", ['copy']);
});