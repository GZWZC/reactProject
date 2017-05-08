var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './public/src/entry.js'
    ],
    output: {
        path: __dirname + '/public/dist',
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader: ['react-hot-loader','babel-loader']
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules!postcss-loader"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),//热加载插件,
        new HtmlWebpackPlugin({
            filename: '../index.html', // 生成index地址：../index.html  相对output_path地址
            template: './index.html'  //模板地址：./index.html，相对webpack目录
        })
    ]
};