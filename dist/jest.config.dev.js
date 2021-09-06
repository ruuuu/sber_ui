"use strict";

module.exports = {
  testEnvironment: 'node',
  reporters: ['default', ['jest-html-reporters', {
    filename: 'report.html',
    expand: true,
    pageTitle: 'AomiReport'
  }]],
  moduleFileExtensions: ['js', 'json'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  testMatch: ['**/specs/*.spec.*'],
  // ['**/specs/*.spec.*']
  globals: {
    testTimeout: 30000
  },
  verbose: true,
  setupFilesAfterEnv: ["jest-allure/dist/setup"]
}; // reporters: [
//     'default',  
//       ['./node_modules/@testomatio/reporter/lib/adapter/jest.js', { apiKey: 'zvy1455092he' }]
//   ],