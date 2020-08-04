const path = require('path')
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  entry: {
    vue: ['vue', 'vue-router'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]_dll.js',
    library: '[name]_dll',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_dll', // 打包后对外暴露的文件名
      path: path.resolve(__dirname, '../dist/manifest.json'), // manifest.json的输出路径
    }),
  ],
}
