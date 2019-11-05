module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
    project: './tsconfig.json',
    tsconfigRootDir: '.',
  },
  settings: {
    'import/resolver': { 'babel-module': {} },
  },
  extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended'],
  plugins: ['import', '@typescript-eslint'],
};
