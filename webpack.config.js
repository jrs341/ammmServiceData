const path = require('path');

module.exports = {
  // The entry point file described above
  mode: 'development',
  entry: './src/index.js',
  experiments: {
    outputModule: true,
  },
  // The location of the build folder described above
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    library: {
      type: 'module',
    }
  },
  watch: true,
  // Optional and for development only. This provides the ability to
  // map the built code back to the original source format when debugging.
  devtool: 'eval-source-map',
};