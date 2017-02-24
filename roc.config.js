module.exports = {
    settings: {
        test: {
            integrationtest: {
                tests: {
                    pattern: 'ci/**/*.spec.js',
                },
                config: {
                    baseUrl: 'http://www.test.klart.se/',
                    browser: ['chrome'],
                    timeout: 120000,
                    __raw: {
                        logLevel: 'result',
                    },
                },
            },
        },
    },
};
