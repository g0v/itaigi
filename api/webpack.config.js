var path = require('path');
var webpack = require('webpack');
var plugins = [];
var entries = [ './src/index' ];
var loaders = [ 'babel?stage=0' ];
if (/production/.test(process.env.NODE_ENV)) {
    plugins = [ new webpack.optimize.UglifyJsPlugin() ];
}
else {
    plugins = [ new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin() ];
    entries.push('webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server');
    loaders.unshift('react-hot');

}
module.exports = {
  devtool: 'eval',
  entry: entries,
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
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
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};
