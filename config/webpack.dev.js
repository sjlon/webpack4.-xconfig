const { merge } = require('webpack-merge')
const path = require('path')
module.exports = merge(require('./webpack.base'), {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 8001,
    compress: true,
    open: false,
    hot: true,
    // publicPath: '/assets/',
  },
})
