var path = require('../config'),
    gulp = require('gulp');


gulp.task('copy', function() {
    gulp.start("copy-html", "copy-jquery");
});

gulp.task('copy-html', function() {
    return gulp.src(path.src + '/*.html')
      .pipe(gulp.dest(path.dest));
});

gulp.task('copy-jquery', function() {
    return gulp.src(path.src + '/js/lib/jquery.js')
      .pipe(gulp.dest(path.dest + '/js/lib/'));
});

