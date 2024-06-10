// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import lisPlugin from 'eslint-plugin-lit';
import litA11yPlugin from 'eslint-plugin-lit-a11y';

export default tseslint.config(
  {
    ignores: ['dist/**/*'],
  },
  eslint.configs.recommended,
  eslintPluginPrettierRecommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    plugins: { lit: lisPlugin },
    rules: {
      ...lisPlugin.configs.all.rules,
    },
  },
  {
    plugins: { 'lit-a11y': litA11yPlugin },
    rules: {
      ...litA11yPlugin.configs.recommended.rules,
    },
  },
);
