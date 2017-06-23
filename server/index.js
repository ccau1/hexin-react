const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const path = require('path');
const webpackPath = path.join(__dirname, '..', 'webpack.config.js');
const webpackConfig = require(webpackPath);

const NODE_ENV = process.env.NODE_ENV || 'development';

const configPath = path.join(__dirname, '..', 'config/base', NODE_ENV + '.json');
const config = require(configPath);

const PORT = process.env.PORT || config.port;

const app = express();

if (NODE_ENV === 'development') {
  // webpack should be selected based on NODE_ENV
  const compiler = webpack(webpackConfig);

  // app.use('/assets', express.static(path.join(__dirname, '../assets')));

  app.use(
    webpackDevMiddleware(compiler, {
      hot: false,
      filename: 'bundle.js',
      stats: {
        colors: true
      }
    })
  );
}

app.use(express.static(path.join(__dirname, '../www')));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../www', 'index.html'));
});

const server = app.listen(PORT, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log(config.name + ' app listening at http://%s:%s', host, port);
});
