const path = require('path');
module.exports = {
  mode: 'development', // set mode to development or production
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // __dirname is a global variable that holds the absolute path of the current directory
    publicPath: '/dist/' // public path for dev server
  },
  devtool: 'inline-source-map', // generate source maps for debugging
  module: {
    rules: [
      {
        test: /\.ts$/, 
        use: 'ts-loader', 
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'] // resolve extensions for imports
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      }
    ]
  }
};