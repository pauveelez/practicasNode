var express = require('express');

var server = express();

var mensajes = [];

server.get('/', function (req, res) {
	res.send('Hola Mundo');
});

server.get('/contacto', function (req, res) {
	res.send('Bienvenido a la Zona de Contacto');
});

server.get('/mensajes/nuevo/:mensaje', function (req, res) {
	mensajes.push(req.params.mensaje);
	res.send('Gracias Por tu mensaje: '+req.params.mensaje);
});

server.get('/mensajes/todos', function (req, res) {
	res.send( mensajes + '<br />' );
});

server.get('/mensajes/todos2', function (req, res) {
	res.send( mensajes + '<script>setTimeout(function(){window.location.reload()}, 5000);</script>' );
});



server.listen(3000);
console.log('Servidor corriendo en http://127.0.0.1:3000');