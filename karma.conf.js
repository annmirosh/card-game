module.exports = function (config) {
    var wiredep = require('wiredep');

    var bowerFiles = wiredep({devDependencies: true})['js'];

    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai', 'sinon-chai'],
        exclude: ['src/**/*.e2e.js'],
        files: bowerFiles.concat([
            'node_modules/sinon-chai/sinon.js',
            'src/**/*.js',
            'src/**/*.spec.js'
        ]),
        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-sinon-chai',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-mocha-reporter'
        ],
        client: {
            mocha: {
                reporter: 'html',
                ui: 'bdd'
            }
        },
        reporters: ['mocha'],
        port: 9876,
        colors: true
    });
};