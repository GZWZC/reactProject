var webpack = require('webpack');
var path = require('path');
module.exports = {
    devtool: 'eval-source-map',
    entry: [
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
    }
};