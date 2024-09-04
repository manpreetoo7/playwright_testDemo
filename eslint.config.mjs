import pluginJs from '@eslint/js';
import globals from 'globals';

export default {
  languageOptions: {
    globals: {
      ...globals.node, // Include Node.js global variables like `process`, `module`, etc.
    },
    ecmaVersion: 'latest', // Ensure support for modern JavaScript features
    sourceType: 'module',  // Specify ES Module syntax
  },
  plugins: {
    // Register plugins using the new object format
    '@eslint/js': pluginJs,
  },
  extends: [
    '@eslint/js/recommended', // Use the recommended config from the '@eslint/js' plugin
  ],
  rules: {
    'no-undef': 'error', // Ensure that undefined variables are flagged
    // Add or modify rules as needed
  },
};
