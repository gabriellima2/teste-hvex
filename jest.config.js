const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	modulePaths: [
		"<rootDir>",
	],
	moduleDirectories: [
    "node_modules",
		"<rootDir>",
  ],
	coveragePathIgnorePatterns: [
		"@types",
		"node_modules",
		"interfaces",
		"assets",
		".module.ts",
		".mock.ts",
		".next.ts",
		"<rootDir>/src/components/common/(.*).ts"
	],
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
