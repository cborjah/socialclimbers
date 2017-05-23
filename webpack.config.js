const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        options: {
          presets: ["env", "react"]
        },
      }
    ]
  },
  // devServer: {
  //   historyApiFallback: true
  // },
  plugins: [new HtmlWebpackPlugin({
    template: 'client/index.html'
  })]
}
