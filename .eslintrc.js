module.exports = {
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	parser: '@typescript-eslint/parser',
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	extends: ['eslint:recommended'],
	plugins: ['react', 'import', 'react-hooks'],
	rules: {
		'no-undef': 'off',
		'react/prop-types': 0,
		'no-unused-vars': 0, // Temporal
		'react-hooks/rules-of-hooks': 'error',
		'no-console': 'warn',
		'promise/catch-or-return': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'import/no-extraneous-dependencies': 0,
		'import/prefer-default-export': 0,
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
				],
			},
		],
		'lines-between-class-members': 0,
		'max-len': [
			'error',
			{
				code: 120,
				ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
				ignoreStrings: true,
				ignoreRegExpLiterals: true,
				ignoreTemplateLiterals: true,
			},
		],
		'no-trailing-spaces': 'error',
		'arrow-parens': 0,
		'react-hooks/exhaustive-deps': 'warn',
		'react/jsx-props-no-spreading': 0,
		'react/jsx-one-expression-per-line': 'off',
		'global-require': 0,
		'no-underscore-dangle': 0,
		'react/require-default-props': 0,
		'react/display-name': 0,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
