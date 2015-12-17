var
    gulp = require('gulp'),
    wiredep = require('wiredep').stream;
gulp.task('wiredep', function () {
    gulp.src('./src/index.html')
        .pipe(wiredep())
        .pipe(gulp.dest('./src'));
});