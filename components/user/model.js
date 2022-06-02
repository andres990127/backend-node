// Mongoose permite creear esquemas en la base de datos no relacional Mongo, 
// Esto nos ayuda a validar que los datos sean de un cierto tipo conservando consistencia
const mongoose = require("mongoose");

// Sacamos 'schema' de moongose, que es lo que nos interesa
const Schema = mongoose.Schema;

// A traves de un objeto schema podemos definir por ejemplo los tipos de los datos que vamos a tener y si son obligatorios
const mySchema = new Schema({
    name: String,
});

// Definimos el modelo pasandole los parámetros de cómo se va a llamar la colección(tabla) en mongo y el schema
const model = mongoose.model('User', mySchema);

// Exportamos el módulo
module.exports = model;
