const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('css/[name].css')
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './js/index.js',
    about: './js/about.js',
    home: './js/home.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract(['css-loader']),
      },
      {
        test: /\.(html|png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          },
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(js)$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    extractCSS,
    new CopyWebpackPlugin([
      {from: 'assets', to: 'assets'}
    ])
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9001,  // default 8080
    // status: {
      // assets: true,
      // cached: false,
      // chunkModules: false,
      // chunkOrigins: false,
      // chunks: false,
      // colors: true,
      // hash: false,
      // modules: false,
      // reasons: false,
      // source: false,
      // version: false,
      // warnings: false
    // }
  }
};

console.log(`[NODE_ENV] ${process.env.NODE_ENV}`)

// loader(有順序性，由後往前執行 css-loader > style-loader)
// css-loader        : 把 css 語法轉成 webpack 看的懂的 javascript語法
// style-loader      : 把 webpack 處理好的 css 樣式注入在 style tag 裡
// postcss-loader    : 使用 JavaScript 轉換 css (prefix、語法錯誤...)（未用）
// sass-loader       : Compiles Sass to CSS

// babel-loader      : webpack要讀取任何檔案時，都需要靠它判讀再作轉換
// @babel/core       : 程式調用Babel的API做翻譯
// @babel/preset-env : 直接使用最新版本的JavaScript去做編譯（轉換新的 JavaScript 語法）
// @babel-polyfill   : 要在編譯你的程式碼之前執行，所以要安裝為 dependency。（轉換新的 API模組）

// CopyWebpackPlugin : 就是專門拿來搬移不會經過loader的plugins