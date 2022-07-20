module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['./client/src/**/*.js',
                        './client/src/**/*.jsx',
                        "**/*.{js,jsx}",
                        "!**/server/**",
                        "!**/node_modules/**",
                        "!**/*.config.js",
                        "!**/bundle.js",
                        "!**/server/*",
                        '!**/server/helpers/*',
                        "!**/coverage/**"],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  "moduleNameMapper": {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/ProductOverview/mockData/fileMock.js",
    "\\.(css|less)$": "<rootDir>/test/ProductOverview/mockData/fileMock.js"
  },
};