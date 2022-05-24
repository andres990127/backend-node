// Función estandar para dar respuestas exitosas
exports.success = (req, res, message, status)=>{
    res.status(status || 200).send({ // Si no recibo status envio 200 por defecto y envio un JSON sin error y con el mensaje en 'body'
        "error": "",
        "body": message,
    });
};

// Función estandar para dar respuestas con error
exports.error = (req, res, message, status)=>{
    res.status(status || 500).send({ // Si no recibo status envio 500 por defecto y envio un JSON con error y con el mensaje en 'error' 
        "error": message,
        "body": "",
    });
};