// Importamos nuestro modelo definido
const Model = require('./model');

// Función para agregar un nuevo chat
function addChat(chat){
    const myChat = new Model(chat);
    return myChat.save();
};

// Función para listar chats 
function listChats(userId){
    
    return new Promise((resolve, reject) =>{
        let filter = {};
        if (userId){
            filter = {
                users:userId,
            };
        };

        const chats = Model.find(filter)
            .populate('users')
            .catch(e => {
                reject(e);
            }); 

        resolve(chats); // Retornamos todos los mensajes obtenidos
    }); 
};

module.exports = {
    add: addChat,
    list: listChats,
}