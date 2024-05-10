import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Specify environments
  env: {
    browser: true,
    es2021: true,
  },
  // Specify parser options
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  // Specify rules
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    // Add more rules as needed
  },
};
