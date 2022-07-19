module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['./client/src/**/*.js',
                        './client/src/**/*.jsx',
                        "**/*.{js,jsx}",
                        "!**/node_modules/**",
                        "!**/*.config.js",
                        "!**/bundle.js",
                        "!**/coverage/**"],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};