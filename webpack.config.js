const path = require('path');
// const webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  context: path.join(__dirname, 'src'),
  entry: [
    'babel-polyfill',
    './index.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  plugins: [

  ],
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules'),
    ],
  },
};
