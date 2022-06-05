// Archivo para incializar nuestro servidor de socket.io, de generar una intancia y de poderla compartir [WebSockets]

// Importamos socket.io
const socketIO = require('socket.io');

// Se genera socket como un objeto 
const socket = {};

// Funcion de conexión al socket
function connect(server){
    socket.io = socketIO(server);
};

// Exportamos la funcion de conexión y la instancia de socket.io
module.exports = {
    connect,
    socket,
};