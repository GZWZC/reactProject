var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    devtool: 'eval-source-map',
    entry: {
        main: './public/entry.js',
        common: [
            "react",
            'react-dom',
            'react-router'
        ]
    },
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: '[name].[hash:5].js'
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
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production') //定义生产环境
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html', // 生成index地址：../index.html  相对output_path地址
            template: './index.html'  //模板地址：./index.html，相对webpack目录
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common.bundle.js",
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false, // remove all comments
            },
            compress: {
                warnings: false
            }
        })
    ]
};