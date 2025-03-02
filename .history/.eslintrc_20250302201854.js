module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
  },

  extends: ["@nuxtjs", "plugin:prettier/recommended"],
  // add your custom rules here
  rules: {
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never",
      },
    ],
    quotes: ["error", "double"],
    "vue/no-v-html": ["warning"],
    "comma-dangle": ["error", "always-multiline"],
    semi: ["error", "always"],
    "space-before-function-paren": "off",
    "no-console": ["warn"],
  },
};
