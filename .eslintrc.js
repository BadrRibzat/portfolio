module.exports = {
  extends: ['next/core-web-vitals', 'next/typescript'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@next/next/no-img-element': 'warn',
    'react/no-unescaped-entities': 'off',
    '@next/next/no-html-link-for-pages': 'error',
    '@next/next/no-sync-scripts': 'error',
  },
  overrides: [
    {
      files: ['src/components/SkillsChart.tsx', 'src/sections/Contact.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
