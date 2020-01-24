const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('css/[name].css')

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
      }
    ]
  },
  plugins: [
    extractCSS
  ]
};

console.log(`[NODE_ENV] ${process.env.NODE_ENV}`)

// loader(有順序性，由後往前執行 css-loader > style-loader)
// css-loader    : 把 css 語法轉成 webpack 看的懂的 javascript語法
// style-loader  : 把 webpack 處理好的 css 樣式注入在 style tag 裡
// postcss-loader: 使用 JavaScript 轉換 css (prefix、語法錯誤...)（未用）
// sass-loader   : Compiles Sass to CSS

