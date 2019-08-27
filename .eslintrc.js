module.exports = {
  'extends': ["airbnb", "eslint:recommended", "plugin:react/recommended"],
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'max-len': ["warn", { code: 200, tabWidth: 2 }],
    'no-use-before-define': 'off',
    'consistent-return': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'semi': ['warn', 'never'],
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'object-curly-newline': 'off',
    'quotes': ["error", "single", { "allowTemplateLiterals": false }],
    'react/no-did-update-set-state': "off",
    'react/no-unused-state': 'warn',
    'react/no-deprecated': 'warn',
    'react/sort-comp': 'off',
    'react/forbid-prop-types': 'off',
    'no-case-declarations': 'off',
    "linebreak-style": 0,
    "no-param-reassign": 0,
  },
  'globals': {
    "fetch": false,
    "window": true
  }
}
