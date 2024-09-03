import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginTailwind from 'eslint-plugin-tailwindcss';

export default [
  ...eslintPluginTailwind.configs['flat/recommended'],
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    plugins: {
      tailwindcss: eslintPluginTailwind,
      prettier: eslintConfigPrettier
    },
    rules: {
      'tailwindcss/classnames-order': 'error',
      'tailwindcss/no-custom-classname': 'off',
      'no-console': ['error', { allow: ['error'] }]
    },
    files: ['**/*.astro'],
    ignores: ['node_modules/', '.astro/', 'public/', 'pnpm-lock.yaml']
  },
  eslintConfigPrettier
];
