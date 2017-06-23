const path = require('path');
const webpack = require('webpack');

module.exports.config = function (wp) {
  wp.devtool = 'source-map';

  wp.devServer = {
    contentBase: path.join(__dirname, 'www')
  };

  wp.plugins.push(new webpack.HotModuleReplacementPlugin());
  wp.plugins.push(new webpack.NoEmitOnErrorsPlugin());

};
