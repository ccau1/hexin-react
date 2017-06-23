const path = require('path');
const webpack = require('webpack');

const root = path.join(__dirname, '../../');

module.exports = {
  context: path.join(root, 'src'),
  entry: ['babel-polyfill', './index.js'],
  output: {
    // publicPath: '/src',
    path: path.join(root, 'www'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader?name=[name].[ext]&publicPath=assets/img/&outputPath=assets/img/'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
      }
    })
  ],
  resolve: {
    alias: {
      config: path.join(
        root,
        'config/base',
        (process.env.NODE_ENV || 'development') + '.json'
      )
    },
    modules: [path.join(root, 'src'), path.join(root, 'node_modules')]
  }
};
