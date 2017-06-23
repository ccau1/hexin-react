let webpack = require('./config/webpack/base');
const NODE_ENV = process.env.NODE_ENV || 'development';
let envWebpack = require('./config/webpack/' + NODE_ENV);

envWebpack.config(webpack);

module.exports = webpack;
