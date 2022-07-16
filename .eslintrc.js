module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
  ],
  extends: [
    'google',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'new-cap': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'default-param-last': 'off',
    'max-len': ['error', 160],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'off',
  },
  settings: {
    'jsx-a11y': {
      components: {
        MyButton: 'button',
        RoundButton: 'button',
      },
    },
  },
};
