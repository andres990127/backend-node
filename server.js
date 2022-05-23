// Importamos express
const express = require('express');
// import express from 'express'; // Importe de ECMASCRIPT6

// Inicializamos nuestro express
var app = express();

// Nuestra app va estar escuchando cada vez que llamen a '/' y va a responder "Hola"
app.use('/', (req,res)=>{
    res.send('Hola');
});

// Se escucha por el puerto 3000
app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');
