var webpack = require('webpack');
var path = require('path');
module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/entry.js'
    ],
    output: {
        path: __dirname + '/dist',
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
        new webpack.HotModuleReplacementPlugin()//热加载插件,
    ]
};