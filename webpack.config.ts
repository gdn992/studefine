import path from "path";

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  stats: {
    warningsFilter: /nookies/
  }
};