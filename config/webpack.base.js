const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// css 提取到单独的文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    // publicPath: 'assets',
    path: path.resolve(__dirname, '../dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      title: 'webpck basic',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      { test: /\.svg|png|jpg|bmp|gif$/, use: [{ loader: 'url-loader', options: { limit: 300, name: '[name]-[hash:6].[ext]', outputPath: 'images', esModule: false } }] },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass'),
            },
          },
        ],
      },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      //   { test: /\.(htm|html)$/, loader: 'html-withimg-loader' },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
}
