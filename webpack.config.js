const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  // The entry point file described above
  mode: 'development',
  entry: './src/index.js',
  /*experiments: {
    outputModule: true,
  },*/
  // The location of the build folder described above
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    library: 'lib',
    libraryTarget: 'window',
    libraryExport: 'default',
    /*module: true,
    library: {
      type: 'module',
    }*/
  },
  watch: true,
  // Optional and for development only. This provides the ability to
  // map the built code back to the original source format when debugging.
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ]
};