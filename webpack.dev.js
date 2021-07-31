const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge( common, {
  mode: '',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
} )