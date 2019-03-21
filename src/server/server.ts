import express from 'express'
// eslint-disable-next-line import/no-extraneous-dependencies
import webpack from 'webpack'
// eslint-disable-next-line import/no-extraneous-dependencies
import webpackDevMiddleware from 'webpack-dev-middleware'

const config = require('../../webpack.dev.config')[0] // eslint-disable-line @typescript-eslint/no-var-requires

const app: express.Application = express()
const compiler: webpack.Compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))
app.get("/", (_req, res) => {
  res.render("index");
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})
