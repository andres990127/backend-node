// Importamos nuestro modelo definido
const Model = require('./model');

// Función para crear usuario
function addUser(user){
    const myUser = new Model(user); // Llamamos al modelo y le pasamos el usuario a guardar
    return myUser.save(); // Guardamos el usuario en base de datos
}

module.exports = {
    addUser: addUser,
}