import pluginJs from "@eslint/js";
import globals from "globals";

const recommendedJs = pluginJs.configs.recommended;

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node, // Include Node.js global variables
      },
      ecmaVersion: "latest", // Ensure support for modern JavaScript features
      sourceType: "module", // Specify ES Module syntax
    },
    plugins: {
      "@eslint/js": pluginJs, // Register plugins using the new object format
    },
    rules: {
      "no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          caughtErrors: "none",
        },
      ],
    },
  },
  // Directly include configurations you want to extend from
  recommendedJs,
];
