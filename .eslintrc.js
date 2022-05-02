module.exports = {
  extends: [
    'airbnb-base',
    'eslint:recommended',
  ],
  plugins: [],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    requireConfigFile: false,
  },
  settings: {},
  rules: {
    'no-console': 'off',
  },
};
