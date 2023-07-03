module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import',
    'react',
    'react-hooks',
    'prettier'
  ],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/all',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  settings: {
    react: {
      version: 'detect'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  root: true,
  env: {
    jest: true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto',
      }
    ],
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/ban-ts-comment': ['error', {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': true,
      'ts-nocheck': true,
      'ts-check': true,
      minimumDescriptionLength: 3
    }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/prefer-for-of': ['error'],
    '@typescript-eslint/require-await': ['error'],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-unused-modules': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
    'no-console': 'warn',
    'no-return-await': ['error'],
    'react/no-unused-prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-sort-props': 'off',
    'react/jsx-max-depth': 'off',
    'react/jsx-no-bind': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react/function-component-definition': 'off',
    'react/forbid-component-props': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-literals': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'off',
    'import/no-named-as-default-member': 'off',
    'react/self-closing-comp': 'warn',
    'react/no-multi-comp': 'off',
    "no-case-declarations": 2,
    'react/hook-use-state': 'off',
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "react/jsx-props-no-spreading": 0
      }
    }
  ],
};
