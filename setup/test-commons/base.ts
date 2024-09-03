import type {Config} from '@jest/types';
import path from 'path';

// Sync object
const config: Config.InitialOptions = {
    testEnvironment: 'jsdom',
    verbose: true,
    transform: {
        '\\.[jt]sx?$': ['babel-jest', {
            configFile: path.resolve(__dirname, '.babelrc'),
        }],
    },
    setupFilesAfterEnv: [
        path.resolve(__dirname, 'src', 'setupTests.js'),
    ],
    preset: 'ts-jest',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testMatch: ['**/?(*.)+(spec|test).ts?(x)']
};

export default config;
