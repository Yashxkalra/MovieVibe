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

  // Add your custom rules here
  rules: {
    "vue/html-closing-bracket-newline": [
      "warn", // Changed from "error" to "warn"
      {
        singleline: "never",
        multiline: "never",
      },
    ],
    quotes: ["warn", "double"], // Changed from "error" to "warn"
    "vue/no-v-html": ["warn"], // Fixed incorrect "warning" -> "warn"
    "comma-dangle": ["warn", "always-multiline"], // Changed from "error" to "warn"
    semi: ["warn", "always"], // Changed from "error" to "warn"
    "space-before-function-paren": "off",
    "no-console": ["off"], // Console warnings instead of errors
  },
};
