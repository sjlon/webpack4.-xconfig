const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// JS压缩
const TerserJSPlugin = require('terser-webpack-plugin')
// css压缩优化
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')
module.exports = merge(require('./webpack.base'), {
  mode: 'development',
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    // new CleanWebpackPlugin(), // 使用dllPlugin不能使用该插件
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          to: '',
        },
      ],
    }),
  ],
})
