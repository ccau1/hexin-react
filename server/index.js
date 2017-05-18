const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const app = express();
const path = require('path');

const compiler = webpack(webpackConfig);

app.use(express.static(path.join(__dirname, '../www')));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
}));


// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../www', 'index.html'));
});

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('HEXIN app listening at http://%s:%s', host, port);
});
