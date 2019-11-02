module.exports = {
  root: true,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
    project: './.tsconfig.json',
    tsconfigRootDir: '.',
  },
  extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended'],
  plugins: ['plugin:@typescript-eslint/recommended'],
};
