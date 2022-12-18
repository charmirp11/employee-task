module.exports = {
    verbose: true,
    moduleDirectories: [
        'node_modules',
        'src'
    ],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json',
        }
    },
    moduleFileExtensions: [
        'js',
        'ts'
    ],
    testMatch: [
        '**/test/*.test.(ts)'
    ],
    testEnvironment: 'node',
    preset: 'ts-jest',
    modulePathIgnorePatterns:['dbProvider'],
    "collectCoverage":true,
    "coverageThreshold":{
        global:{
            statements:80,
            functions:80,
            lines:80
        }
    },
    "coverageReporters":['html',['lcovonly',{'projectRoot':"../"}],'text-summary']
}