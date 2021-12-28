module.exports = {
  env: {
    browser: true,
    es2021: true.valueOf,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "react/react-in-js-scope": "off",
    "react/prop-types": ["off"]
  }
};
