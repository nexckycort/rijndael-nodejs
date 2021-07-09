import type { Config } from '@jest/types'
import { pathsToModuleNameMapper } from 'ts-jest/utils'
const {
  compilerOptions: { paths: tsconfigPaths }
} = require('./tsconfig.json')

const paths = {
  ...pathsToModuleNameMapper(tsconfigPaths)
}
Object.assign(
  paths,
  ...Object.keys(paths).map((key) => ({
    [key]: `<rootDir>/src/${paths[key]}`
  }))
)

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  coverageReporters: ['json-summary', 'html-spa', 'text'],
  coverageProvider: 'v8',
  moduleNameMapper: paths,
  testMatch: ['**/*.spec.ts']
}

export default config
