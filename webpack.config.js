var path = require('path');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var plugins = [];
var entries = [ './src' ];
var loaders = [ 'babel?stage=0', 'strict' ];

plugins = [ new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin(), new WebpackNotifierPlugin() ];
entries.push('webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server');
loaders.unshift('react-hot');

module.exports = {
  devtool: 'eval',
  entry: entries,
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
    libraryTarget: 'umd'
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: loaders,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=1'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  postcss: [
    require('autoprefixer-core')
  ]
};
