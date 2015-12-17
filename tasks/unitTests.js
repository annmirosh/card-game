var
    gulp = require('gulp'),
    isTravis = process.env.TRAVIS || false,
    Server = require('karma').Server;

gulp.task('unitTests', function (done) {
    new Server({
        configFile: __dirname + '/../karma.conf.js',
        singleRun: isTravis,
        autoWatch: true,
        browsers: isTravis ? ['PhantomJS'] : ['Chrome']
    }, done).start();
});