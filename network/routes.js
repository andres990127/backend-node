// Importamos express
const express = require('express');  // import express from 'express'; => Importe de ECMASCRIPT6

const message = require('../components/message/network');

const routes = (server)=>{
    server.use('/message', message)
};

module.exports = routes;