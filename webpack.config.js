const webpack = require('webpack'),
      path = require('path'),
      fileSystem = require('fs'),
      env = require('./utils/env'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      WriteFilePlugin = require('write-file-webpack-plugin');
      // WebpackCleanupPlugin = require('webpack-cleanup-plugin');

// load the secrets
const alias = {};

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDevelopment = NODE_ENV === 'development';

const secretsPath = path.join(__dirname, ('secrets.' + env.NODE_ENV + '.js'));

if (fileSystem.existsSync(secretsPath)) {
  alias['secrets'] = secretsPath;
}

module.exports = {
  entry: {
    popup: path.join(__dirname, 'src', 'popup', 'index.js'),
    background: path.join(__dirname, 'src', 'background', 'index.js'),
    companyList: path.join(__dirname, 'src', 'content', 'companyList.js'),
    getDataFromCompanyPage: path.join(__dirname, 'src', 'content', 'getDataFromCompanyPage.js'),
  },
  output: {
    path: path.join(__dirname, 'build', 'js'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }, {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[name]__[local]__[hash:base64:5]',
              sourceMap: isDevelopment
            }
          },
          'autoprefixer-loader',
          'sass-loader'
          ]
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader'
        ]
      }, {
				test: /\.(pug|jade)$/,
        exclude: /node_modules/,
				use: ['pug-loader'],
			}
    ]
  },
  resolve: {
    alias: alias,
    extensions: ['.js', '.jsx', '.css', '.sass']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(NODE_ENV)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'popup/index.pug'),
      filename: '../popup.html',
      chunks: ['popup']
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'background/index.pug'),
      filename: '../background.html',
      chunks: ['background']
    }),
    // new WebpackCleanupPlugin(),
    new WriteFilePlugin()
  ]
};
