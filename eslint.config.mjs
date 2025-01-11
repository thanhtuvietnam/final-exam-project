// import pluginTailwind from 'eslint-plugin-tailwindcss';
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginNext from '@next/eslint-plugin-next';
// import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginQuery from '@tanstack/eslint-plugin-query';
import perfectionist from 'eslint-plugin-perfectionist';
import pluginReactHook from 'eslint-plugin-react-hooks';
import pluginPrettier from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    name: 'eslintConfig',
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    ignores: [
      '.git',
      '.husky',
      '.jest',
      '.next',
      '.plop',
      '.vscode',
      'node_modules',
      'public',
      '**/.yaml',
      // '**/.config.ts',
      // '**/.config.mjs',
      // '**/.setup.js',
    ],
  },

  // NOTE: Plugins Next, React, React-Hook, Prettier
  {
    plugins: {
      '@next/next': pluginNext,
      'react-hooks': pluginReactHook,
      'prettier/prettier': pluginPrettier,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
      ...pluginReactHook.configs.recommended.rules,
    },
  },
  //NOTE: Plugins JS, TS, React, Query, Tailwind, JsxA11y
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  // ...pluginTailwind.configs['flat/recommended'],
  // pluginJsxA11y.flatConfigs.recommended,
  ...pluginQuery.configs['flat/recommended'],

  {
    rules: {
      '@typescript-eslint/no-unused-vars': 1,
      '@typescript-eslint/no-explicit-any': 1,
      'no-console': 1,

      'react/react-in-jsx-scope': 0,
      'react/prop-types': 0,
      // 'no-undef': 1,
    },
    settings: {
      react: {
        version: 'detect',
      },
      tailwindcss: {
        // These are the default values but feel free to customize
        callees: ['classnames', 'clsx', 'ctl'],
        config: 'tailwind.config.js', // returned from `loadConfig()` utility if not provided
        cssFiles: [
          '**/*.css',
          '!**/node_modules',
          '!**/.*',
          '!**/dist',
          '!**/build',
        ],
        cssFilesRefreshRate: 5_000,
        removeDuplicates: true,
        skipClassAttribute: false,
        whitelist: [],
        tags: [], // can be set to e.g. ['tw'] for use in tw`bg-blue`
        classRegex: '^class(Name)?$',
      },
    },
  },
  // perfectionist.configs['recommended-line-length'],
  // NOTE: Perfectionist
  {
    plugins: {
      perfectionist,
    },
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'line-length',
          groups: [
            'react',
            'type',
            ['builtin', 'external'],
            'lodash',
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
          customGroups: {
            value: {
              react: ['^react$', '^react-.+'],
              lodash: 'lodash',
            },
            type: {
              react: ['^react$', '^react-.+'],
            },
          },
        },
      ],
      'perfectionist/sort-exports': [
        'error',
        {
          type: 'line-length',
        },
      ],
      'perfectionist/sort-named-imports': [
        'error',
        {
          type: 'line-length',
        },
      ],
      'perfectionist/sort-switch-case': [
        'error',
        {
          type: 'line-length',
        },
      ],
      'perfectionist/sort-jsx-props': [
        'error',
        {
          type: 'line-length',
          groups: [
            'ref',
            'data',
            'accessibility',
            'layout',
            'motion',
            'ui',
            'children',
            'events',
            'miscellaneous',
          ],
          customGroups: {
            ref: ['ref'],
            data: ['data-*'],
            accessibility: ['aria-*', 'role'],
            layout: [
              'src',
              'width',
              'height',
              'alt',
              'fill',
              'quality',
              'sizes',
              'loading',
              'placeholder',
            ],
            motion: ['initial', 'animate', 'exit', 'transition'],
            ui: ['className', 'id', 'style', 'key'],
            children: ['children'],
            miscellaneous: [],
            events: ['on*', 'handle*'],
          },
        },
      ],
    },
  },
];
