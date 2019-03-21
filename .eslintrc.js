module.exports = {
  plugins: [
    "@typescript-eslint",
    "jest",
  ],
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    "no-console": "off",
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "off",
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    "react/destructuring-assignment": "off",
    // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    "react/jsx-filename-extension": "off",
    // add devDependencies for webpack https://github.com/airbnb/javascript/issues/1168
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'spec/**',
        'test/**',
        'tests/**',
        '**/__tests__/**',
        'webpack.config.js',
        'webpack.config.*.js',
        'webpack.*.config.js', // add this file type
        'src/server/**',
        'gulpfile.js',
        'Gruntfile',
      ],
      optionalDependencies: false,
    }],
  },
}
