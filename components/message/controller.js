// Importamos nuestro modulo de base de datos
const store = require('./store');

function addMessage(user, message) {
    
    // Creamos una promesa para avisarle a 'Network' que es el que llama a esta función si ha ocurrido un error
    return new Promise((resolve, reject) => {
        
        // Si no me llega el usuario o el mensaje entonces elevo un error
        if(!user || !message){
            console.error('[MessageController] No hay usuario o mensaje');
            reject('Los datos son incorrectos');
            return false;
        };

        // Guardamos la información recibida en un JSON
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        };

        // Imprimimos la información que recibimos en la petición
        store.add(fullMessage);

        // Resolvemos la promesa
        resolve(fullMessage);
    });
};

function getMessages(filterUser) {
    
    // Creamos una promesa para avisarle a 'Network' que es el que llama a esta función si ha ocurrido un error
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    });
};

function updateMessage(id, message){

    // Creamos una promesa para avisarle a 'Network' que es el que llama a esta función si ha ocurrido un error
    return new Promise( async (resolve, reject)=>{
        
        // Si no llega el identificador del mensaje a editar o el contenido del mensaje entonces lanzamos error
        if( !id || !message){
            console.error('[MessageController] No se pudo editar el mensaje');
            reject('Los datos son incorrectos');
            return false;
        };
        
        // Esperamos a que la función de actualización lleve a cabo
        const result = await store.updateText(id, message);

        // Resolvemos la promesa con el resultado
        resolve(result);
    });
};

function getMessage(id){

    // Creamos una promesa para avisarle a 'Network' que es el que llama a esta función si ha ocurrido un error
    return new Promise( async (resolve, reject)=>{
        
        // Si no llega el identificador del mensaje a buscar lanzamos error
        if( !id ){
            console.error('[MessageController] No se pudo encontrar el mensaje');
            reject('El identificador es incorrecto');
            return false;
        };
        
        // Esperamos a que la función de obtencion del mensaje se lleve a cabo
        const result = await store.getMessage(id);

        // Resolvemos la promesa con el resultado
        resolve(result);
    });
};

function deleteMessage(id){

    // Creamos una promesa para avisarle a 'Network' que es el que llama a esta función si ha ocurrido un error
    return new Promise( async (resolve, reject)=>{
        
        // Si no llega el identificador del mensaje a buscar lanzamos error
        if( !id ){
            console.error('[MessageController] No se pudo encontrar el mensaje a borrar');
            reject('El identificador es incorrecto');
            return false;
        };
        
        // Esperamos a que la función de borrado del mensaje se lleve a cabo
        const result = await store.deleteMessage(id);

        // Resolvemos la promesa con el resultado
        resolve(result);
    });
}

// Exportamos todos las funciones
module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    getMessage,
    deleteMessage
};