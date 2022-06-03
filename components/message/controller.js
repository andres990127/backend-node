// Importamos nuestro modulo de base de datos
const store = require('./store');

function addMessage(chat, user, message, file) {
    
    // Creamos una promesa para avisarle a 'Network' que es el que llama a esta función si ha ocurrido un error
    return new Promise((resolve, reject) => {
        
        // Si no me llega el usuario o el mensaje entonces elevo un error
        if(!chat || !user || !message){
            console.error('[MessageController] No hay usuario o mensaje');
            reject('Los datos son incorrectos');
            return false;
        };

        // Creamos variable para almacenar la URL de la imagen si es enviada en un mensaje
        let fileUrl = '';

        // Si llega URL de imágen se concatena a la ubicación que se están guardando
        if(file){
            fileUrl = 'http://localhost:3000/app/files/'+ file.filename;
        }

        // Guardamos la información recibida en un JSON
        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl
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