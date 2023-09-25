module.exports = {
  root: true,
  env: { browser: true, es2024: true },
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:unicorn/recommended',
    'plugin:security/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "unicorn/better-regex": "error",
    "@typescript-eslint/no-explicit-any": "error"
  },
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    }
  }
}
