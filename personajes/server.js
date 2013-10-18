var express = require('express.io'),
	swig = require('swig'),
	_ = require('underscore'),
	passport = require('passport');

var server = express();
server.http().io();

//Static Files
server.configure(function(){
	server.use( express.static('./public') );

});

swig.setDefaults({
	cache : false
});

// View engine
server.engine('html', swig.renderFile );
server.set('view engine', 'html');
server.set('views', './views');

server.get('/', function (req, res) {
	res.render('index');
});

server.listen(3000);
console.log('Servidor corriendo en http://127.0.0.1:3000');

