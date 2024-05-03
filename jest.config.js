/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.tsx?$": "ts-jest" 
},
moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    '@repo/definitions(.*)$': '<rootDir>/packages/./definitions/src/$1',
    '@repo/events(.*)$': '<rootDir>/packages/./events/src/$1',
},
};