const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  coverageProvider: 'v8',
  collectCoverageFrom: ['src/**/*.js', '!src/pages/_app.js', '!src/pages/_document.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  moduleNameMapper: {
    '@/components/(.*)': '<rootDir>/src/components/$1',
    '@/pages/(.*)': '<rootDir>/src/pages/$1',
    '@/src/(.*)': '<rootDir>/src/$1'
  },
  coveragePathIgnorePatterns: ['.*__snapshots__/.*']
}

module.exports = createJestConfig(customJestConfig)
