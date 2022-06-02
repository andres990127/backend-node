// Importamos nuestro modulo de base de datos
const store = require('./store');

// Función para crear un nuevo chat con un conjunto de usuarios
function addChat(users){

    // Si no se le envian usuarios o no es un array de usuarios entonces rechaza
    if(!users || !Array.isArray(users)){
        return Promise.reject('Invalid user list');
    };

    // Creamos una constante chat que tendrá todos los usuarios que participan
    const chat = {
        users: users,
    };

    // Se retorna el resultado de agregar el chat
    return store.add(chat);
};


// Función para listar los chats creados
function listChats(userId) {
    return store.list(userId);
};

// Exportamos todos las funciones
module.exports = {
    addChat,
    listChats,
};