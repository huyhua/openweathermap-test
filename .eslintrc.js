module.exports = {
  extends: [
    'standard',
    'prettier',
    'prettier/standard',
    'plugin:cypress/recommended',
  ],
  plugins: ['standard', 'prettier', 'promise', 'cypress', 'chai-friendly'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2,
  },
}
