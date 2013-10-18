var con = require("socket.io").listen(6969);

con.sockets.on("connection", arranque);

function arranque(usuario){
	usuario.on("nuevoNombre", emitir);
}

function emitir(data){
	con.sockets.emit("nombreDesdeServidor", data + "*");
}