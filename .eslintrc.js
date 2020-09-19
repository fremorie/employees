module.exports = {
    'env': {
        'browser': true,
    },
    'extends': [
        "plugin:flowtype/recommended",
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 12,
        'sourceType': 'module',
    },
    'plugins': [
        'react',
        "flowtype"
    ],
    'rules': {
        'quotes': ['error', 'single'],
        'semi': [2, 'always'],
        'object-curly-spacing': [2, 'never'],
        'comma-dangle': [2, 'always-multiline'],
    },
};
