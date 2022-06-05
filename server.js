// Instalamos Nodemon para evitar reiniciar el servidor => [npm i nodemon] => [nodemon server]

// Importamos express
const express = require('express');  // import express from 'express'; => Importe de ECMASCRIPT6

// Inicializamos nuestro express
const app = express();

// Inicializamos nuestro servidor http con nuestra app de express
const server = require('http').Server(app);

// Importamos nuestro modulo de configuraciones
const config = require('./config');

// Importamos el módulo cors
const cors = require('cors');

// Para trabajar con el body de la petición
const bodyParser = require('body-parser');

// Importamos nuestro modulo de socket
const socket = require('./socket');

// Importamos nuestro modulo de conexión a la base de datos
const db = require('./db');

// Importamos nuestro modulo de rutas
const router = require('./network/routes');

// Conectamos a nuestra base de datos y enviamos URI
db(config.dbUrl);

// Usamos cors en nuestra app para abrir todas las cabeceras
app.use(cors());

// Añanidmos bodyParser a la aplicación de express para trabajar con el contenido que venga en el body de la petición o en el query
app.use(bodyParser.json());

// Conectamos nuestro servidor de sockets
socket.connect(server);

// Añadimos el router a la aplicación de express
router(app);

// Hacemos público una carpeta "Public" para que todo lo que se encuentre en ella se pueda acceder por link: http://localhost:3000/app/index.html
app.use(config.publicRoute, express.static('public'));

// Se escucha por el puerto 3000
server.listen(config.port, ()=>{
    console.log('La aplicación está escuchando en ' + config.host + ':' + config.port);
});

