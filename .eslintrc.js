// https://docs.expo.dev/guides/using-eslint/

module.exports = {
  extends: [
    "expo",
    "standard",
    "standard-jsx",
    "standard-with-typescript",
    "plugin:jest/recommended"
  ],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ["/dist/*"],
  rules: {
    "import/no-unresolved": "off",
  },
};
