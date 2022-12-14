module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:astro/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    extraFileExtensions: ['.astro'],
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'max-len': 'off',
  },
};
