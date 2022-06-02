// Importamos nuestro modelo definido
const Model = require('./model');

// Función para crear usuario
function addUser(user){
    const myUser = new Model(user); // Llamamos al modelo y le pasamos el usuario a guardar
    return myUser.save(); // Guardamos el usuario en base de datos
};

// Función para obtener uno o todos los usuarios
async function getUsers(filterUser){

    // Filtro para buscar usuarios, solo se llena si en el query se esta enviando un usuario especifico al cual buscar
    let filter = {};

    // Si existe un filtro por usuario se llena la variable de filtro
    if (filterUser !== null){
        filter = {name: filterUser}; // Obtenemos el usuario con el nombre enviado por el query
    };
    
    // Obtenemos el o los usuarios
    const users = await Model.find(filter); 

    // Retornamos todos los mensajes obtenidos
    return users;
};

// Exportamos las funciones
module.exports = {
    addUser: addUser,
    getUsers: getUsers,
};