var path = require('path');
var http = require('http');
var webpack = require('webpack');
var express = require('express');
var devConfig = require('./webpack.dev.config');
var buildConfig = require('./webpack.config');
var app = express();
var compiler = webpack(devConfig);
var server = http.createServer(app);

if(process.env.NODE_ENV == 'dev'){
	app.use(require('webpack-dev-middleware')(compiler, {
  		publicPath: devConfig.output.publicPath
	}));
	app.use(require('webpack-hot-middleware')(compiler));
}


app.use(express.static(path.join(__dirname, 'build')));


server.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});
