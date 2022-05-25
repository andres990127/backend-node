function addMessage(user, message) {
    
    // Creamos una promesa para avisarle a 'Network' que es el que llama a esta función si ha ocurrido un error
    return new Promise((resolve, reject) => {
        
        // Si no me llega el usuario o el mensaje entonces elevo un error
        if(!user || !message){
            console.error('[MessageController] No hay usuario o mensaje');
            reject('Los datos son incorrectos');
            return false;
        }

        // Guardamos la información recibida en un JSON
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        };

        // Imprimimos la información que recibimos en la petición
        console.log(fullMessage);

        // Resolvemos la promesa
        resolve(fullMessage);
    });
};

// Exportamos todos las funciones
module.exports = {
    addMessage,
};