var HtmlwebpackPlugin = require('html-webpack-plugin'),
    merge = require('webpack-merge'),
    path = require('path'),
    webpack = require('webpack'),
    Clean = require('clean-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

/* PostCSS Plugins */
var postcssImport = require('postcss-import'),
    postcssNested = require('postcss-nested'),
    postcssExtend = require('postcss-simple-extend'),
    postcssFonts = require('postcss-font-magician'),
    postcssBEM = require('postcss-bem-linter'),
    postcssVars = require('postcss-simple-vars'),
    postcssMixins = require('postcss-mixins'),
    postcssLost = require('lost'),
    postcssRucksack = require('rucksack-css'),
    postcssSize = require('postcss-size'),
    autoprefixer = require('autoprefixer');

var pkg = require('./package.json');

const TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);

var common = {
    entry: path.resolve(ROOT_PATH, 'app/main.jsx'),
    resolve: {
        /* Resolves extensions to require('file') instead of require('file.js') */
        extensions: ['', '.js', '.jsx', '.json', '.coffee']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
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
              postcssFonts({
                  hosted: './fonts'
              }),
              postcssMixins(),
              postcssBEM(),
              postcssNested(),
              postcssVars(),
              postcssExtend(),
              postcssRucksack(),
              postcssLost(),
              postcssSize(),
              autoprefixer({ browsers: ['last 2 versions'] })
        ];
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Recipes App'
        })
    ]
}

if(TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'eval-source-map',
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loader: "style-loader!css-loader?minimize!postcss-loader",
                    include: path.resolve(ROOT_PATH, 'app')
                }
            ]
        },
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            // display only errors to reduce the amount of output
            stats: 'errors-only',

            // parse host and port from env so this is easy
            // to customize
            host: process.env.HOST,
            port: process.env.PORT
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    });
}

if(TARGET === 'build' || TARGET === 'stats') {
    module.exports = merge(common, {
        devtool: 'source-map',
        entry: {
            app: path.resolve(ROOT_PATH, 'app/main.jsx'),
            vendor: Object.keys(pkg.dependencies)
        },
        output: {
            path: path.resolve(ROOT_PATH, 'build'),
            filename: '[name].[hash].js?'
        },
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!postcss-loader'),
                    include: path.resolve(ROOT_PATH, 'app')
                }
            ]
        },
        plugins: [
            new Clean(['build']),
            new ExtractTextPlugin('styles.[hash].css'),
            new webpack.optimize.CommonsChunkPlugin(
                'vendor',
                '[name].[hash].js'
            ),
            new webpack.optimize.UglifyJsPlugin({
                compress: { warnings: false }
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            })
        ]
    });
}
