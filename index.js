module.exports = {
    parser: '@typescript-eslint/parser',
    "extends": ["eslint:recommended"],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    plugins: [
        '@typescript-eslint',
        '@tanstack/query',
        'import',
        'jsdoc',
        'jsx-a11y',
        'prettier',
        'react',
        'react-hooks',
        'unused-imports',
    ],
    // 사용할 규칙 설정
    "rules": {
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
        '@typescript-eslint/no-unused-vars' : ['error']
    },
}