var path = require('path');
var webpack = require('webpack');
var express = require('express');
var devConfig = require('./webpack.dev.config');
var buildConfig = require('./webpack.config');
var app = express();
var compiler = webpack(devConfig);

if(process.env.NODE_ENV == 'dev'){
	app.use(require('webpack-dev-middleware')(compiler, {
  		publicPath: devConfig.output.publicPath
	}));
	app.use(require('webpack-hot-middleware')(compiler));
}



app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});
