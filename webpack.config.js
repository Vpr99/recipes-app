var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

/* PostCSS Plugins */


var ROOT_PATH = path.resolve(__dirname);

module.exports = {
    entry: path.resolve(ROOT_PATH, 'app/main'),
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader",
                include: path.resolve(ROOT_PATH, 'app')
            }
        ]
    },
    postcss: function () {
        return [];
    },
    devServer: {
        colors: true,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            title: 'Recipes App'
        })
    ]
};
