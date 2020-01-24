module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/no-unused-components": "off",
    "vue/require-v-for-key": "off",
    "no-unused-vars": "off",
    "vue/valid-template-root": "off",
    "vue/no-unused-vars": "off",
    "vue/no-parsing-error": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
