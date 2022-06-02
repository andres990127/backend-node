// Importamos nuestro modulo de base de datos
const store = require('./store');

function addUser(name){

    if(!name){
        return Promise.reject('Invalid name');
    };

    const user = {
        name,
    };

    return store.addUser(user);
}

function getUsers(user){

    // Creamos una promesa para avisarle a 'Network' que es el que llama a esta función si ha ocurrido un error
    return new Promise((resolve, reject) => {
        resolve(store.getUsers(user));
    });
}

// Exportamos todos las funciones
module.exports = {
    addUser,
    getUsers,
};