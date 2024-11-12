const config = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    // languageOptions: {
    //   parser: typescriptParser,
    //   parserOptions: {
    //     ecmaFeatures: {
    //       jsx: true
    //     },
    //     ecmaVersion: 'latest',
    //     sourceType: 'module'
    //   },
    //   globals: {
    //     browser: true,
    //     es2021: true
    //   }
    // },
    // plugins: {
    //   react,
    //   'react-hooks': reactHooks,
    //   import: importPlugin,
    //   'unused-imports': unusedImports,
    //   'jsx-a11y': jsxA11y,
    //   '@typescript-eslint': typescriptEslint,
    //   'simple-import-sort': simpleImportSort,
    //   prettier,
    //   'react-refresh': reactRefresh
    // },
    rules: 'off',
    // settings: {
    //   react: {
    //     version: 'detect'
    //   }
    // },
    ignores: [
      'dist',
      'build',
      'node_modules/',
      '.eslintrc.json',
      'src/app/utils/src/lib/rhf-textfield/index.tsx'
    ]
  }
];

export default config;
