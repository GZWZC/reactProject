var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    devtool: 'eval-source-map',
    entry: [
        './public/src/entry.js'
    ],
    output: {
        path: __dirname + '/public/dist',
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader: ['babel-loader']
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules!postcss-loader"
            }
        ]
    },
    resolve: {
        modules: ['node_modules', path.join(__dirname, './node_modules')],
        extensions: [ '.web.js', '.js', '.json'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html', // 生成index地址：../index.html  相对output_path地址
            template: './index.html'  //模板地址：./index.html，相对webpack目录
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js",
        })
    ]
};