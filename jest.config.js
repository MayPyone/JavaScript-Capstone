const { defaults } = require('jest-config');

module.exports = {
  ...defaults,
  // setupFiles: ['./01-jest-fn/utils.js'],
  testEnvironment: 'jsdom',
};