module.exports = {
    testEnvironment: 'node',
    reporters: [
        'default', [
            'jest-html-reporters',
            {
                filename: 'report.html',
                expand: true,
                pageTitle: 'BankReport'
            },
            ['./node_modules/@testomatio/reporter/lib/adapter/playwright.js', {
                apiKey: 'qzn04d563te7',
            }]
        ]
    ],

    moduleFileExtensions: ['js', 'json'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    testMatch: ['**/specs/*.spec.*'],
    globals: {
        testTimeout: 300000,
    },
    verbose: true,
    setupFilesAfterEnv: ["jest-allure/dist/setup"]


};