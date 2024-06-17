const path = require("path");
module.exports = {
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: [path.join(__dirname, "tsconfig.json")],
      },
    },
    react: {
      version: "detect",
    },
  },
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
