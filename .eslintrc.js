module.exports = {
  root: true,
  env: {
    es2021: true,
    jest: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "airbnb",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [".eslintrc.js", "node_modules", "babel.config.js"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",

    // type 선언 없이 기본값 선언 시 스웨거에 파라미터가 보이지 않는 문제를 해결하기 위해 이를 해결하기 위해 타입과 기본값 모두 선언할 수 있도록 no-inferrable-types ignore 처리
    "@typescript-eslint/no-inferrable-types": "off",

    "import/prefer-default-export": "off",
    "no-console": "warn",
    "class-methods-use-this": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/no-empty-function": "off",
    "max-classes-per-file": "off",
    "no-await-in-loop": "off",
    "no-restricted-syntax": "off",
    "no-continue": "off",
    "no-plusplus": "off",
    "no-param-reassign": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  overrides: [
    {
      files: ["src/components/Icon/Icons/*.tsx"],
      rules: {
        "max-len": [1, { code: 9999 }],
      },
    },
  ],
  globals: {
    __CLIENT__: true,
    __SERVER__: true,
    __DEV__: true,
  },
};
