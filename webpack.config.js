const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  entry: {
    index: './src/index.js',
    main: './src/main.js',
  },
  output: {
    filename: '[name].bundle.js',
    // publicPath: 'assets',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 8000,
    compress: true,
    // open: true,
    hot: true,
    // publicPath: '/assets/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      title: 'webpck basic',
    }),
    // new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: '',
        },
      ],
    }),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.svg|png|jpg|bmp|gif$/, use: [{ loader: 'url-loader', options: { limit: 300, name: '[name]-[hash:6].[ext]', outputPath: 'images', esModule: false } }] },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass'),
            },
          },
        ],
      },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(htm|html)$/, loader: 'html-withimg-loader' },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
}
