import globals from 'globals';
import pluginJs from '@eslint/js';

export default {
  languageOptions: {
    globals: {
      ...globals.node,  // Include Node.js global variables like `process`, `module`, etc.
    },
    ecmaVersion: 'latest',  // Ensure support for modern JavaScript features
    sourceType: 'module',   // Specify ES Module syntax
  },
  plugins: [
    // List any plugins you're using
  ],
  overrides: [
    {
      files: ['*.js', '*.mjs'],  // Apply configuration to JavaScript and MJS files
      parserOptions: {
        ecmaVersion: 12,  // Set ECMAScript version to parse
      },
    },
  ],
  rules: {
    'no-undef': 'error',  // Ensure that undefined variables are flagged
    // Add or modify rules as needed
  },
  extends: [
    pluginJs.configs.recommended,  // Extend recommended ESLint configurations
  ],
};