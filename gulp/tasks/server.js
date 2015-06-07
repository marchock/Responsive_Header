var path = require('../config'),
    gulp = require('gulp'),
    webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src(path.dest)
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});