module.exports = {
  root: true,
  extends: [
    'react-app',
    // "react-app/jest"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint'],
  ignorePatterns: ['build/', 'coverage/'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-console': ['warn'],
    '@typescript-eslint/no-redeclare': 'off', // this is temporary to get rid of bad warning
  },
};
