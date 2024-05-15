/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: 'ts-jest',
    testEnvironment: 'node',

    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',

    moduleFileExtensions: ['ts', 'js'],
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    }
};
