const path = require("path");
module.exports = {
  ...require("@river/eslint-config/react"),
  // settings: {
  //   "import/parsers": {
  //     "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
  //   },
  //   "import/resolver": {
  //     typescript: {
  //       alwaysTryTypes: true,
  //       project: ["./tsconfig.json"],
  //     },
  //   },
  //   react: {
  //     version: "detect",
  //   },
  // },

  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
      experimentalObjectRestSpread: true,
    },
    project: path.join(__dirname, "tsconfig.json"),
    allowImportExportEverywhere: true,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
