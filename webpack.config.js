module.exports = {
  entry: ['./client/index.js'], // entry is for webpack to front page
  mode: 'development',
  output: {
    filename: './public/bundle.js',
    path: __dirname, // assumes your bundle.js will also be in the root of your project folder
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
