const Usuario = require('../database/models/Usuario');

const creationUsuarios = async (newUsuario)=> {
    const usuarioCreated = await Usuario.createUsuario(newUsuario);
    return usuarioCreated;
}

module.exports = {
    creationUsuarios
}