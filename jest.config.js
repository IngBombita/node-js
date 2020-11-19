module.exports = {
    clearMocks: true,
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    roots: [
        "<rootDir>/tests"
    ],
    verbose: true,
    testEnvironment: "node",
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
};