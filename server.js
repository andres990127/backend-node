// Instalamos Nodemon para evitar reiniciar el servidor => [npm i nodemon] => [nodemon server]

// Importamos express
const express = require('express');  // import express from 'express'; => Importe de ECMASCRIPT6

// Para trabajar con el body de la petición
const bodyParser = require('body-parser');

// Importamos nuestro modulo de rutas
const router = require('./network/routes');

// Inicializamos nuestro express
var app = express();

// Añanidmos bodyParser a la aplicación de express para trabajar con el contenido que venga en el body de la petición o en el query
app.use(bodyParser.json());

// Añadimos el router a la aplicación de express
router(app);

// Hacemos público una carpeta "Public" para que todo lo que se encuentre en ella se pueda acceder por link: http://localhost:3000/app/index.html
app.use('/app', express.static('public'));

// Se escucha por el puerto 3000
app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');
