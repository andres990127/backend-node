// Importamos express
const express = require('express');  // import express from 'express'; => Importe de ECMASCRIPT6
const { route } = require('express/lib/application');

// Importamos nuestro modulo de respuestas HTTP
const response = require('../../network/response');

// Importamos nuestro modulo de controlador
const controller = require('./controller');

// Router de express para diferenciar entre peticiones
const router = express.Router();

// Configuro respuesta para una petición get a la dirección "/message"
router.get('/',(req,res)=>{

    // Si en el get me llega un query que me diga cual usuario traer entonces lo almaceno en una variable
    const filterUser = req.query.user || null;
    
    controller.getMessages(filterUser)
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

// Configuro respuesta para una petición patch a la dirección "/message", esta deberá venir con el ID del mensaje a editar
router.patch('/:id',(req,res)=>{

    // Esperamos recibir en la url el ID del mensaje a editar y en el body el texto nuevo que se le quiere dar
    controller.updateMessage(req.params.id, req.body.message)
        .then((data)=>{
            response.success(req, res, 'Se ha editado exitosamente el mensaje', 200); // Llama a nuestro modulo de response y ejecuta nuestra respuesta de exito
        })
        .catch( e => {
            response.error(req, res, "Error interno", 500, e) // Llama a nuestro modulo de response y ejecuta nuestra respuesta de fallo
        })
});

// Configuro respuesta para una petición get a la dirección "/message", esta deberá venir con el ID del mensaje a buscar
router.get('/:id',(req,res)=>{

    // Esperamos recibir en la url el ID del mensaje a buscar
    controller.getMessage(req.params.id)
        .then((message)=>{
            response.success(req, res, message, 200); // Llama a nuestro modulo de response y ejecuta nuestra respuesta de exito
        })
        .catch( e => {
            response.error(req, res, "Error interno", 500, e) // Llama a nuestro modulo de response y ejecuta nuestra respuesta de fallo
        })
});

// Configuro respuesta para una petición get a la dirección "/message", esta deberá venir con el ID del mensaje a borrar
router.delete('/:id',(req,res)=>{

    // Esperamos recibir en la url el ID del mensaje a borrar
    controller.deleteMessage(req.params.id)
        .then((data)=>{
            response.success(req, res, "Se ha borrado el mensaje exitosamente", 200); // Llama a nuestro modulo de response y ejecuta nuestra respuesta de exito
        })
        .catch( e => {
            response.error(req, res, "Error interno", 500, e) // Llama a nuestro modulo de response y ejecuta nuestra respuesta de fallo
        })
});

// Exportamos todas las rutas
module.exports = router;