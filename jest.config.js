module.exports = {
    setupFiles: [
        '<rootDir>/configs/enzyme',
    ],
    coverageDirectory: 'coverage',
    coverageReporters: [
        'json',
        'text',
        'lcov',
        'clover',
        'json-summary',
    ],
    testMatch: [
        '**/components/spec/**/*.[jt]s?(x)',
        '**/selectors/spec/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[tj]s?(x)',
    ],
    transformIgnorePatterns: [
        '/node_modules/',
    ],
};
