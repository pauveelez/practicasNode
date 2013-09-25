var http = require('http');

function ejecutar(){

	function onRequest( req, res ){

		res.writeHead( 200, {'Content-Type':'text/html'} )
		var arr = [
			'<html>',
				'<head>',
					'<title>Curso Hola Mundo</title>',
					'<link rel="stylesheet" href = "./styles.css" />',
				'</head>',
				'<body>',
					'<h1>Hola Mundo</h1>',
				'</body>',
		];
		//Especificamos el separador con ''
		res.write( arr.join('') );
		res.end();
	}

	var server = http.createServer( onRequest ).listen(5000);
	console.log('Servidor corriendo puerto: 5000');

}


exports.ejecutar = ejecutar;

