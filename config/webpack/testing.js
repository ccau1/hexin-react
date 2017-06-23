const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports.config = function (wp) {
  wp.plugins.push(new webpack.optimize.UglifyJsPlugin());
  wp.plugins.push(new webpack.optimize.AggressiveMergingPlugin());
  wp.plugins.push(new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
  }));
  wp.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'node-static',
    filename: 'node-static.js',
    minChunks(module, count) {
      var context = module.context;
      return context && context.indexOf('node_modules') >= 0;
    }
  }));
  wp.plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    openAnalyzer: false
  }));
};
