import next from '@next/eslint-plugin-next';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescript,
      '@next/next': next,
    },
    rules: {
      // Your custom rules
      '@typescript-eslint/no-explicit-any': 'warn',
      '@next/next/no-img-element': 'warn',
      'react/no-unescaped-entities': 'off',
    },
    languageOptions: {
      parser: typescriptParser,
    },
  },
];
