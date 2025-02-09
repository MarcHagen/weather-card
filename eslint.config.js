// @ts-check

import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import lit from 'eslint-plugin-lit';
import litA11Y from 'eslint-plugin-lit-a11y';
import prettier from 'eslint-plugin-prettier';
import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/.gitignore', 'dist/*', 'node_modules/*'],
  },
  ...compat.extends('eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:lit/recommended', 'plugin:lit-a11y/recommended', 'plugin:prettier/recommended'),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      lit,
      prettier,
      'lit-a11y': litA11Y,
    },
    rules: {
      'prettier/prettier': [
        'warn',
        {
          printWidth: 230,
        },
      ],
    },
  },
];
