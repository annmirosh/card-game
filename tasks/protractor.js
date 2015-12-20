var gulp = require('gulp'),
    protractor = require('gulp-protractor').protractor;

gulp.task('protractor', function () {
    return gulp.src(['src/**/*e2e.js'])
        .pipe(protractor({
            configFile: 'protractor-conf.js'
        }))
        .on('error', function (e) {
            throw e
        });
});