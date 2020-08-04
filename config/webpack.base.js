const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// css 提取到单独的文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  // main: './src/main.js',
  // entry: {
  //   index: './src/index.js',
  //   main: './src/main.js',
  // },
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // 'async只对异步加载的模块代码拆分, all 动态静态导入的代码都会切割拆分， initial
      minSize: 30000, //模块最少大于30kb才拆分
      maxSize: 0, // 模块大小无上限，只要大于30kb都拆分... 如果值为50000则超过50Kb会进一步拆分
      minChunks: 1, //模块最小要引用一次才拆分
      maxAsyncRequests: 5, // 异步加载时同时发送的请求数量最大不能超过5个，超过5的部分就不会再拆分
      maxInitialRequests: 3, // 页面初始化时同时发送的请求数量最大不能超过3个，超过3的的部分不会再拆分
      automaticNameDelimiter: '~', // 默认的连接符
      name: true, // 拆分的chunk名，设为true表示根据模块名和cachaGroup的key来自动生成chunk名
      cacheGroups: {
        // 缓存组配置，上面配置读取完成后进行拆分，如果需要把多个模块拆分到一个文件，就需要缓存，所以命名为缓存组
        // vendors: false,
        // default: false,
        vendors: {
          //自定义缓存组名
          test: /[\\/]node_modules[\\/]/, // 检查node_modules目录，只要模块在该目录下就是用上面配置拆分这个组
          priority: -10, // 权重-10，决定哪个组优先配置，
          filename: 'vendors.js',
        },
        default: {
          // 默认缓存组名
          minChunks: 2, // 至少引用两次才会被拆分
          priority: -20, // 权重-20
          reuseExistingChunk: true, //如果主入口引入了两个模块，其中一个正好引用了后一个，就会直接复用，无需引用两次
        },
      },
    },
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dist/manifest.json'),
    }),
    new VueLoaderPlugin(),
    new webpack.IgnorePlugin(/\.\/locale/, /moment/),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      title: 'webpck basic',
    }),
    new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, '../dist/vue_dll.js'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    noParse: /jquery|lodash/,
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
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
