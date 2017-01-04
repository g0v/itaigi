var path = require('path');
var webpack = require('webpack');
var StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin;

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    eventsource: 'eventsource-polyfill', // necessary for hot reloading with IE
    middleware: 'webpack-hot-middleware/client',
    babel: 'babel-polyfill',
    src: './src',
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChunks: Infinity,
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ['babel', 'strict'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader?limit=1',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
};
