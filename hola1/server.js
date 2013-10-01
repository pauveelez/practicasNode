//Libreria para llamado de http
var http = require('http');
//Para manejar sistema de archivos
var sa = require('fs');
var ruta = require('path');

function ejecutar(){

	function onRequest( req, res ){
		console.log("Petición...");
		//Capturamos en consola lo que esta
		//recibiendo el servidor
		console.log(req.url);

		//Concatenamos la ruta recibida
		var rutaArchivo = './Vistas' + ( (req.url == '/')?'/index.html':req.url )
		console.log(rutaArchivo);

		//Para extraer la ext del archivo capturado
		var ext = ruta.extname(rutaArchivo);
		//Valor por defecto para el tipo de contenido
		var contentType = 'text/html';
		switch(ext){
			case '.css':
				contentType = 'text/css';
			break;
			case '.js':
				contentType = 'text/javascript';
			break;
		}

		//Validamos si el archivo existe
		ruta.exists(rutaArchivo, function(existe){
			if(existe){
				sa.readFile(rutaArchivo, function(error, contenido){
					if(error){
						//Código de error
						res.writeHead(500);
						res.end();
					}else{
						//Enviamos Código 200 para mostrar la página	
						res.writeHead(200, {'Content-Type':contentType});
						res.end(contenido);						
					}
				});
			}else{
				//Código de página no encontrada
				res.writeHead(404);
				res.end();
			}
		});		
	}

	var server = http.createServer( onRequest ).listen(5000);
	console.log('Servidor corriendo puerto: 5000');
}

exports.ejecutar = ejecutar;
