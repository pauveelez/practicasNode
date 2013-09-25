var http = require('http');

function onRequest(req, res){
	res.writeHead(200, {'content-Type' : 'text/html'});
	res.write('ola k ase');
	res.end;
}

var server = http.createServer(onRequest).listen(5000);
console.log('Servidor corriendo en http://127.0.0.1:5000');
