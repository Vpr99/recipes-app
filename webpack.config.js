var HtmlwebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var path = require('path');
var webpack = require('webpack');

/* PostCSS Plugins */
var postcssImport = require('postcss-import');
var postcssNested = require('postcss-nested');
var postcssExtend = require('postcss-simple-extend');
var postcssVars = require('postcss-simple-vars');
var postcssMixins = require('postcss-mixins');
var postcssLost = require('lost');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);

var common = {
  entry: path.resolve(ROOT_PATH, 'app/main'),
  output: {
      path: path.resolve(ROOT_PATH, 'build'),
      filename: 'bundle.js'
  },
  module: {
      loaders: [
          {
              test: /\.css$/,
              loader: "style-loader!css-loader?minimize!postcss-loader",
              include: path.resolve(ROOT_PATH, 'app')
          }
      ]
  },
  postcss: function () {
      return [
        postcssImport({
              onImport: function (files) {
                  files.forEach(this.addDependency);
              }.bind(this)
          }),
          postcssMixins(),
          postcssNested(),
          postcssVars(),
          postcssExtend(),
          postcssLost()
      ];
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlwebpackPlugin({
          title: 'Recipes App'
      })
  ]
}

if(TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'eval-source-map',
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    });
}
