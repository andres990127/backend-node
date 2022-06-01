// Archivo para gestionar toda la conexión a la base de datos

// Importamos mongoose
const db = require("mongoose");

// Cuando mongoose use promesas va a usar la del scoope global
db.Promise = global.Promise;

// Función para conectarnos a la base de datos
async function connect(url) {

    // Hacemos conexión con la base de datos [Creamos version free en mlab.com] 
    await db.connect(url, {
        useNewUrlParser: true,
    });

    // Confirmamos conexión con base de datos
    console.log('[DB] Conectada con éxito');
};

module.exports = connect;

