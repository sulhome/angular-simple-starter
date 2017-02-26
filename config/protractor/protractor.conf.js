require('ts-node/register');
let path = require('path');
let appRoot = path.resolve(__dirname, '../..');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    baseUrl: 'http://127.0.0.1:8080/',

    specs: [
        path.join(appRoot,'test/e2e/**.e2e.ts')

    ],

    exclude: [],

    framework: 'jasmine',

    allScriptsTimeout: 110000,

    jasmineNodeOpts: {
        showTiming: true,
        showColors: true,
        isVerbose: false,
        includeStackTrace: false,
        defaultTimeoutInterval: 400000
    },

    directConnect: true,

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['show-fps-counter=true']
        }
    },

    onPrepare: function() {
        browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    },

    useAllAngular2AppRoots: true
};
