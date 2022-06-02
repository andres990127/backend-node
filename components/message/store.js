// Importamos nuestro modelo definido
const Model = require('./model');

// Función para añadir mensaje a la lista
function addMessage(message){
    const myMessage = new Model(message); // Llamamos al modelo y le pasamos el mensaje a guardar
    myMessage.save(); // Guardamos el mensaje en base de datos
};

// Función para obtener mensajes de la lista, es asincrona porque demora en pedir la info de la BD
async function getMessages(filterUser) {

    return new Promise((resolve, reject) => {
        // Filtro para buscar usuarios, solo se llena si en el query se esta enviando un usuario especifico al cual buscarle los mensajes
        let filter = {};

        // Si existe un filtro por usuario se llena la variable de filtro con los mensajes a buscar del usuario
        if (filterUser !== null) {
            filter = { user: filterUser }; // Obtenemos todos los mensajes que tengan como usuario el usuario ingresado en el query
        };

        // Obtenemos todos los mensajes con .find
        const messages = Model.find(filter)
            .populate('user') // Buscamos registro de otra entidad con el id del campo 'User'
            .catch(e => {
                reject(e);
            }); 

        resolve(messages); // Retornamos todos los mensajes obtenidos
    })

};

// Función para actualizar mensajes de la lista, es asincrona porque demora en pedir la info de la BD
async function updateText(id, message){
    const foundMessage = await Model.findOne({ // Obtenemos el registro con el id que nos llega
        _id: id
    });

    // Le asignamos el nuevo valor del mensaje
    foundMessage.message = message;

    // Guardamos el nuevo mensaje
    const newMessage = await foundMessage.save();

    // Retornamos el valor del nuevo mensaje
    return newMessage;
};

// Función para obtener un mensaje de la lista, es asincrona porque demora en pedir la info de la BD
async function getMessage(id){

    // Obtenemos el mensaje buscandolo por el id que nos llega
    const foundMessage = await Model.findOne({
        _id: id
    });

    // Retornamos el contenido del mensaje
    return foundMessage;
};

// Función para borrar un mensaje de la lista, es asincrona porque demora en borrar la info de la BD
async function deleteMessage(id){

    // Borramos el mensaje buscandolo por el id que nos llega
    const result = await Model.deleteOne({
        _id: id
    });

    // Retornamos el valor del nuevo mensaje
    return result;
};


module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    getMessage: getMessage,
    deleteMessage: deleteMessage
}