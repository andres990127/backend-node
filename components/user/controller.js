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

// Exportamos todos las funciones
module.exports = {
    addUser,
};