// eslint-disable-next-line import/no-extraneous-dependencies
import { defaults } from 'jest-config'

module.exports = {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '.*\\.(story|stories)\\.(j|t)sx?'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  watchPathIgnorePatterns: ['node_modules'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.+(story|stories).{js,jsx,ts,tsx}',
    '!src/index.ts',
    '!src/components/index.ts',
    '!src/theme/**',
  ],
  coverageReporters: ['lcov', 'text', 'text-summary', 'html'],
  coverageThreshold: {
    global: {
      branches: 97,
      functions: 99,
      lines: 99,
      statements: 99,
    },
  },
}
