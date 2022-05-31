// Generamos un 'MOK' de una base de datos para igualar su funcionamiento

// Importamos mongoose
const db = require("mongoose");

// Importamos nuestro modelo definido
const Model = require('./model');

// Cuando mongoose use promesas va a usar la del scoope global
db.Promise = global.Promise;

// Hacemos conexión con la base de datos [Creamos version free en mlab.com] 
db.connect('mongodb+srv://user:user1234@telegrom.x79d4.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
});

// Confirmamos conexión con base de datos
console.log('[DB] Conectada con éxito');

// Función para añadir mensaje a la lista
function addMessage(message){
    const myMessage = new Model(message); // Llamamos al modelo y le pasamos el mensaje a guardar
    myMessage.save(); // Guardamos el mensaje en base de datos
};

// Función para obtener mensajes de la lista, es asincrona porque demora en pedir la info de la BD
async function getMessages(){
    const messages = await Model.find(); // Obtenemos todos los mensajes con .find vacío y los esperamos
    return messages; // Retornamos todos los mensajes obtenidos
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


module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    getMessage: getMessage
    // delete
}