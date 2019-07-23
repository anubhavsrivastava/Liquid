module.exports = {
	env: {
		browser: true,
		es6: true
	},
	parserOptions: {
		sourceType: 'module',

		ecmaFeatures: {
			jsx: true,
			experimentalObjectRestSpread: true
		}
	},
	rules: {
		'react/prop-types': 0
	},
	extends: ['eslint:recommended', 'plugin:react/recommended']
};
