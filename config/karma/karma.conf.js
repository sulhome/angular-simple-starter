// get the testing choice and replace entry files accordingly
let testTarget = process.env.NODE_ENV || 'unit';

// build preprocessors value based on testTarget
let preprocessors = {};
preprocessors[`karma.entry.${testTarget}.js`] = ['webpack', 'sourcemap'];

module.exports = (config) => {
    config.set({

        basePath: '',

        frameworks: ['jasmine'],

        // This can be either karma.entry.unit.js or karma.entry.integration.js depending on the testTarget variable
        files: [
            `karma.entry.${testTarget}.js`
        ],

        exclude: [],

        preprocessors: preprocessors,

        reporters: ['spec'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['PhantomJS'],

        singleRun: true,

        concurrency: Infinity,

        webpack: require('../webpack/webpack.test.js'),

        webpackServer: {
            noInfo: true
        }
    })
};
