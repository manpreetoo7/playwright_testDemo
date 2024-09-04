import pluginJs from '@eslint/js';
import globals from 'globals';

const recommendedJs = pluginJs.configs.recommended;

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node, // Include Node.js global variables
      },
      ecmaVersion: 'latest', // Ensure support for modern JavaScript features
      sourceType: 'module',  // Specify ES Module syntax
    },
    plugins: {
      '@eslint/js': pluginJs, // Register plugins using the new object format
    },
    rules: {
      'no-undef': 'error', // Ensure undefined variables are flagged
      // Add or modify rules as needed
    },
  },
  // Directly include configurations you want to extend from
  recommendedJs,
];
