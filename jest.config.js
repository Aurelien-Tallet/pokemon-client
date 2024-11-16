/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  testMatch: ['**/?(*.)+(spec).ts?(x)'],
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
};
