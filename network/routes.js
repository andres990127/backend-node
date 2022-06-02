// Importamos express
const express = require('express');  // import express from 'express'; => Importe de ECMASCRIPT6

// Obtenemos en una constante el componente a redirigir
const message = require('../components/message/network');

// Obtenemos en una constante el componente a redirigir
const user = require('../components/user/network');

// Obtenemos en una constante el componente a redirigir
const chat = require('../components/chat/network');

// Redirijo hacia el componente respectivo según la URL que se llama
const routes = (server)=>{
    server.use('/message', message)
    server.use('/user', user)
    server.use('/chat', chat)
};

// Exportamos el modulo
module.exports = routes;