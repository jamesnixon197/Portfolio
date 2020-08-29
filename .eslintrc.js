module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        indent: ['error', 4],
        quotes: ['error', 'single', { avoidEscape: true }],
        'comma-dangle': ['error', 'always-multiline'],
    },
};
