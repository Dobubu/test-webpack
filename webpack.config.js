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
  }
};

console.log(`[NODE_ENV] ${process.env.NODE_ENV}`)