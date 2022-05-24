// Instalamos Nodemon para evitar reiniciar el servidor => [npm i nodemon] => [nodemon server]

// Importamos express
const express = require('express');  // import express from 'express'; => Importe de ECMASCRIPT6

// Para trabajar con el body de la petición
const bodyParser = require('body-parser');

// Importamos nuestro modulo de respuestas HTTP
const response = require('./network/response');

// Router de express para diferenciar entre peticiones
const router = express.Router();

// Inicializamos nuestro express
var app = express();

// Añanidmos bodyParser a la aplicación de express para trabajar con el contenido que venga en el body de la petición o en el query
app.use(bodyParser.json());

// Añadimos el router a la aplicación de express
app.use(router);

// Configuro respuesta para una petición get a la dirección "/message"
router.get('/message',(req,res)=>{
    console.log(req.headers); // Se leen las cabeceras de las peticiones
    res.header({ // Se pueden responder también cabeceras
        "custom-header": "Nuestro valor personalizado",
    })
    response.success(req, res, 'Lista de mensajes'); // Llama a nuestro modulo de response y ejecuta nuestra respuesta de exito
});

// Configuro respuesta para una petición post a la dirección "/message"
router.post('/message',(req,res)=>{
    console.log(req.body);
    console.log(req.query);

    // Se simula un error si nos biene un 'OK' en el query
    if(req.query.error == 'OK'){
        response.error(req, res, 'Error simulado', 400); // Llama a nuestro modulo de response y ejecuta nuestra respuesta de fallo
    } else{
        response.success(req, res, 'Creado correctamente', 201); // Llama a nuestro modulo de response y ejecuta nuestra respuesta de exito
    }
});

app.use('/app', express.static('public'));

// Se escucha por el puerto 3000
app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');
