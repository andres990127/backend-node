// Archivo para enviar respuestas a peticiones HTTP

// Mensajes por status
const statusMessages = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error',
}

// Función estandar para dar respuestas exitosas
exports.success = (req, res, message, status)=>{

    if(!status){
        status = 200;
    };

    if(!message){
        message = statusMessages[status];
    };

    // Si no recibo status envio 200 por defecto y envio un JSON sin error y con el mensaje en 'body'
    res.status(status).send({ 
        "error": "",
        "body": message,
    });
};

// Función estandar para dar respuestas con error
exports.error = (req, res, message, status, details)=>{

    if(!status){
        status = 500;
    };

    if(!message){
        message = statusMessages[status];
    };

    // Es buena práctica guardar el error detallado en el log pero no mostrarlo al cliente
    console.error('[Response error] '+ details); 

    // Si no recibo status envio 500 por defecto y envio un JSON con error y con el mensaje en 'error' 
    res.status(status).send({ 
        "error": message,
        "body": "",
    });
};