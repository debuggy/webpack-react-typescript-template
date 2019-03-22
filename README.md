# webpack-react-typescript-template

A template for react app using webpack and typesciprt

## webpack

Please see [webpack.dev.config.js](./webpack.dev.config.js) for details. Use babel-loader to enable babel for typescript. Plugins used:

- [ForkTsCheckerWebpackPlugin](https://github.com/Realytics/fork-ts-checker-webpack-plugin). Since babel itself does no check type of typescript language, so we include this plugin to run typescript type checker on a separate process.

- [MiniCssExtractPlugin](https://github.com/webpack-contrib/mini-css-extract-plugin). Used as css loader.

- [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin). The html loader.

- [CleanWebpackPlugin](https://github.com/johnagan/clean-webpack-plugin). Clean webpack's output every bulid.

- [nodeExternals](https://github.com/liady/webpack-node-externals). Need this to avoid error when working with Express.

## Babel

Please see [.babelrc.js](./.babelrc.js) for details. We mainly use @babel/typescript and @babel/react presets to compile files.

## Eslint

Typescript now include eslint support in its [roadmap](https://github.com/Microsoft/TypeScript/issues/29288). Use @typescript-eslint plugin to run lint on typescript. For more details, please refer to [.eslint.js](./.eslint.js).

## Prettier

One of the most popular [code formatter](https://github.com/prettier/prettier). The config lies on [.prettier.config.js](./prettier.config.js).

## Lint-staged

Lint check before git commit. [Run linters against staged git files](https://github.com/okonet/lint-staged).

## Editorconfig

Code style and file formatter supported by almost all editors.

