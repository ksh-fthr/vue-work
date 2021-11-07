module.exports = {
  env: {
    es2017: true,
    node: true,
  },
  plugins: [
    'vue'
  ],
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'prettier'
  ],
  rules: {
    'vue/html-closing-bracket-newline': [
      'error',
      {
        multiline: 'never'
      }
    ],
    'no-extra-parens': 1,
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
    'func-call-spacing': [
      'error',
      'never'
    ],
    'no-unneeded-ternary': 'error',
    'semi': [
      'error',
      'never'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'no-var': 'error',
    'indent': [
      'error',
      2
    ],
    'space-in-parens': [
      'error',
      'never'
    ],
    'space-before-function-paren': [
      'error',
      'never'
    ],    
    'no-console': 0,
    'comma-spacing': 'error',
    'computed-property-spacing': 'error',
    'key-spacing': 'error',
    'keyword-spacing': [
      'error',
      {
        'before': true,
        'after': true 
      }
    ],
    'eol-last': [
      'error',
      'always'
    ]
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'espree',
    ecmaVersion: 2017,
    sourceType: 'module'
  }
}

