module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:mithril/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    // Disable the rule for all files to allow for mixed js/ts.
    // https://github.com/typescript-eslint/typescript-eslint/blob/v3.9.1/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // Don't allow relative imports. VSCode will also use absolute imports by default.
    'no-restricted-imports': [
      'error',
      {
        patterns: ['./*'],
      },
    ],
  },
  overrides: [
    {
      // Enable the rule specifically for TypeScript files to allow for mixed js/ts.
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
      },
    },
  ],
};
