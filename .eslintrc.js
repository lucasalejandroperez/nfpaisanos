module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
  settings: {
    react: {
      version: 'detect'
    }
  },
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'standard-with-typescript',
		'eslint-config-prettier',
		'plugin:jest/recommended'
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
    project: "./tsconfig.json"
	},
	plugins: ['react'],
	rules: {
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/triple-slash-reference": "warn",
	"@typescript-eslint/strict-boolean-expressions": "warn",
	"@typescript-eslint/no-floating-promises": "off",
	"@typescript-eslint/prefer-optional-chain": "off",
	"@typescript-eslint/no-confusing-void-expression": "off",
	"@typescript-eslint/consistent-type-definitions": "off"
  },
};
