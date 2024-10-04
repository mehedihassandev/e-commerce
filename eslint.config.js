import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';

const config = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: {
        browser: true,
        es2021: true
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      import: importPlugin,
      'unused-imports': unusedImports,
      'jsx-a11y': jsxA11y,
      '@typescript-eslint': typescriptEslint,
      'simple-import-sort': simpleImportSort,
      prettier,
      'react-refresh': reactRefresh
    },
    rules: {
      'prettier/prettier': 'error',
      'jsx-a11y/anchor-is-valid': 'off',
      'comma-dangle': 'off',
      'max-len': 'off',
      'no-param-reassign': 'off',
      'no-plusplus': 'off',
      'no-return-assign': 'off',
      'object-curly-newline': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      indent: 'off',
      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/indent': [0],
      '@typescript-eslint/no-use-before-define': ['off'],
      '@typescript-eslint/no-shadow': ['off'],
      '@typescript-eslint/dot-notation': ['off'],
      '@typescript-eslint/naming-convention': ['off'],
      'react/prop-types': ['off'],
      'react/jsx-uses-react': 'error',
      'react/display-name': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react/no-unescaped-entities': 'off',
      'react/forbid-prop-types': 'off',
      'react/jsx-max-props-per-line': [
        1,
        {
          maximum: 2,
          when: 'multiline'
        }
      ],
      'react/prefer-stateless-function': 'off',
      'react/function-component-definition': [
        0,
        {
          namedComponents: ['function-declaration', 'arrow-function'],
          unnamedComponents: ['function-declaration', 'arrow-function']
        }
      ],
      'react/jsx-filename-extension': 'off',
      'no-use-before-define': 'off',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'global-require': 'off',
      'no-undef': 'off',
      'no-unsafe-optional-chaining': 'off',
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],
      'import/first': 'error',
      'import/no-extraneous-dependencies': 'off',
      'import/prefer-default-export': 'off',
      'import/extensions': [
        'error',
        'never',
        {
          ignorePackages: true,
          pattern: {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
            json: 'always'
          }
        }
      ],
      'import/no-unresolved': 'off',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'off',
        {
          groups: [
            // Packages `react` related packages come first.
            ['^react', '^@?\\w'],
            // Internal packages.
            ['^(@|components)(/.*|$)'],
            // Side effect imports.
            ['^\\u0000'],
            // Parent imports. Put `..` last.
            ['^\\.\\.(?!/?$)', '^\\./?$'],
            // Other relative imports. Put same-folder imports and `.` last.
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style imports.
            ['^.+\\.?(css)$']
          ]
        }
      ],
      'lines-around-directive': ['error', 'always'],
      // add new line above comment
      'lines-around-comment': [
        'error',
        {
          beforeLineComment: false,
          beforeBlockComment: true,
          allowBlockStart: true,
          allowClassStart: true,
          allowObjectStart: true,
          allowArrayStart: true
        }
      ],
      // add new line above return
      'newline-before-return': 'error',
      // add new line below import
      'import/newline-after-import': [
        'error',
        {
          count: 1
        }
      ],
      // add new line after each var, const, let declaration
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: ['*'],
          next: ['multiline-const', 'multiline-let', 'multiline-var']
        }
      ],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ]
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    ignores: [
      'dist',
      'build',
      'node_modules/',
      '.eslintrc.json',
      'libs/utils/src/lib/theme'
    ]
  }
];

export default config;
