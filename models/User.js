const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: String,
    username: String,
    password: String,
    correo: String,
    celular: String,
    token1: String,
    token2: String,
    tarjeta: String,
    ip: String
});


module.exports = model( 'User', UserSchema );