// Importamos express
const express = require('express');
// import express from 'express'; // Importe de ECMASCRIPT6

// Router de express para diferenciar entre peticiones
const router = express.Router();

// Inicializamos nuestro express
var app = express();

// Añadimos el router a la aplicación de express
app.use(router);

// Configuro respuesta para una petición get a la dirección "/message"
router.get('/message',(req,res)=>{
    res.send('Lista de mensajes');
});

// Configuro respuesta para una petición post a la dirección "/message"
router.post('/message',(req,res)=>{
    res.send('Mensaje añadido');
});

// Se escucha por el puerto 3000
app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');
