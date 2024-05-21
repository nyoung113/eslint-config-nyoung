module.exports = {
    parser: '@typescript-eslint/parser',
    "extends": [
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
    ],

    "plugins" : ["unused-imports"],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    "ignorePatterns": ["build", "dist", "public"],
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    "rules": {
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
                pathGroups: [
                    {
                        pattern: 'angular',
                        group: 'external',
                        position: 'before'
                    }
                ],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                'newlines-between': 'always',
            },
        ],
        'import/extensions': [
            'error',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
                json: 'ignorePackages',
            },
        ],
        'no-unused-vars' : 'off',
        'unused-imports/no-unused-imports': 'error',
        '@typescript-eslint/no-unused-vars' : ['error'],
    },
}