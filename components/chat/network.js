// Importamos express
const express = require('express');  // import express from 'express'; => Importe de ECMASCRIPT6

// Importamos nuestro modulo de respuestas HTTP
const response = require('../../network/response');

// Importamos nuestro modulo de controlador
const controller = require('./controller');

// Router de express para diferenciar entre peticiones
const router = express.Router();

// Configuro respuesta para una petición post a la dirección "/chat"
router.post('/',(req,res)=>{

    // Esperamos recibir en el body un JSON con el usuario creador del mensaje y el mensaje
    controller.addChat(req.body.users)
        .then((data)=>{
            response.success(req, res, data, 201); // Llama a nuestro modulo de response y ejecuta nuestra respuesta de exito
        })
        .catch( e => {
            response.error(req, res, 'Internal error', 500, e); // Llama a nuestro modulo de response y ejecuta nuestra respuesta de fallo
        });
});

// Configuro respuesta para una petición get a la dirección "/chat"
router.get('/:userId',(req,res)=>{
    
    controller.listChats(req.params.userId)
        .then((users)=>{
            response.success(req, res, users, 200); // Llama a nuestro modulo de response y ejecuta nuestra respuesta de exito
        })
        .catch( e => {
            response.error(req, res, 'Internal error', 500, e); // Llama a nuestro modulo de response y ejecuta nuestra respuesta de fallo
        });
});

// Exportamos todas las rutas
module.exports = router;
