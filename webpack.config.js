const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.js',
    about: './about.js',
    home: './home.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
};

console.log(`[NODE_ENV] ${process.env.NODE_ENV}`)

// loader(有順序性，由後往前執行 css-loader > style-loader)
// css-loader  : 把 css 語法轉成 webpack 看的懂的 javascript語法
// style-loader: 把 webpack 處理好的 css 樣式注入在 style tag 裡