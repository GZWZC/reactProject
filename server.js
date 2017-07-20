var path = require('path');
var http = require('http');
var webpack = require('webpack');
var express = require('express');
var devConfig = require('./webpack.dev.config');
var buildConfig = require('./webpack.config');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var compiler = webpack(devConfig);
var server = http.createServer(app);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ limit: 1024 * 1024 * 1024, extended: true }));
app.use(bodyParser({
  limit: 1024 * 1024 * 1024,// 64M
  extended: true,
}));

if(process.env.NODE_ENV == 'dev'){
	app.use(require('webpack-dev-middleware')(compiler, {
  		publicPath: devConfig.output.publicPath
	}));
	app.use(require('webpack-hot-middleware')(compiler));
}


app.use(express.static(path.join(__dirname, 'build')));


var AskIndex = require('./routes/AskIndex');
app.use('/AskIndex', AskIndex);


server.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});
