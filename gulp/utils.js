var gulp = require('gulp'),
    del = require('del');

gulp.task('clean', function(cb) {
    del(["dest/**"],{force: true}, cb);
});