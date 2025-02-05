module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^next/font/(.*)$': require.resolve('next/dist/build/jest/__mocks__/nextFontMock.js'),
  },
  testMatch: ['**/*.test.tsx', '**/*.test.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest'],
    '^.+\\.(js|jsx)$': ['babel-jest']
  }
}; 

