// Importamos express
const express = require('express');  // import express from 'express'; => Importe de ECMASCRIPT6

// Importamos nuestro modulo de respuestas HTTP
const response = require('../../network/response');

// Importamos nuestro modulo de controlador
const controller = require('./controller');

// Router de express para diferenciar entre peticiones
const router = express.Router();

// Configuro respuesta para una petición get a la dirección "/message"
router.get('/',(req,res)=>{

    controller.getMessages()
        .then((messageList)=>{
            response.success(req, res, messageList, 200); // Llama a nuestro modulo de response y ejecuta nuestra respuesta de exito
        })
        .catch( e => {
            response.error(req, res, 'Unexpected Error', 500, e); // Llama a nuestro modulo de response y ejecuta nuestra respuesta de fallo
        });
});

// Configuro respuesta para una petición post a la dirección "/message"
router.post('/',(req,res)=>{

    // Esperamos recibir en el body un JSON con el usuario creador del mensaje y el mensaje
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage)=>{
            response.success(req, res, 'Se ha creado el mensaje: '+ fullMessage.message, 201); // Llama a nuestro modulo de response y ejecuta nuestra respuesta de exito
        })
        .catch( e => {
            response.error(req, res, 'Información invalida', 400, 'Error en el contenido'); // Llama a nuestro modulo de response y ejecuta nuestra respuesta de fallo
        });
});

// Exportamos todas las rutas
module.exports = router;