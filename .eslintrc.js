module.exports = {
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'],
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['simple-import-sort', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:jsx-a11y/recommended',
    'plugin:@next/next/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  rules: {
    // We will use TypeScript's types for component props instead
    'react/prop-types': 'off',
    // No need to import React when using Next.js
    'react/react-in-jsx-scope': 'off',

    // typescript can handle this
    '@typescript-eslint/no-explicit-any': 'off',

    // Why would you want unused vars?
    '@typescript-eslint/no-unused-vars': ['error'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    // custom
    '@typescript-eslint/ban-types': 'off',
    'no-empty-pattern': 'off',

    // for unused-imports
    // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
  },
  overrides: [
    {
      files: ['*.stories.tsx'],
      rules: {
        'react-hooks/rules-of-hooks': 'off',
      },
    },
  ],
}
