const Rol = require('../database/models/Rol');
const Usuario = require('../database/models/Usuario');
const bcrypt = require('bcrypt');

const paginacion = async (opciones)=> {
    const { count, rows } = await Usuario.findAndCountAll({ opciones,
        include: [{
            model: Rol,
        }],
    });

    return {count, rows};
}

const creationUsuario = async (newUsuario)=> {
    const usuarioCreated = new Usuario(newUsuario);
    const salt = bcrypt.genSaltSync();
    usuarioCreated.contrasenia = bcrypt.hashSync(newUsuario.contrasenia, salt);
    await usuarioCreated.save();
    return usuarioCreated;
}

const updateUsuario = async (usuario, id)=> {
    const usuarioUpdated = await Usuario.update(usuario, {
        where: {
            usuario_id: id
        }
    });
    return usuarioUpdated;
}

const deleteUsuario = async (usuario)=> {
    const usuarioDeleted = await usuario.destroy();
    return usuarioDeleted;
}

const validacionCorreo = async (correo) => {
    const existeEmail = await Usuario.findOne({
        where: {
            correo_electronico: correo
        }
    })
    return existeEmail;
}

const validacionNombreUsuario = async (nombreUsuario) => {
    const existeNombreUsuario = await Usuario.findOne({
        where: {
            nombre_usuario: nombreUsuario
        }
    })
    return existeNombreUsuario;
}

const validacionExisteUsuario = async (id) => {
    const existeUsuario = await Usuario.findByPk(id)
    return existeUsuario;
}

const validacionContrasenia = async (contrasenia, correo_electronico) => {
    const existeContrasenia = await Usuario.findOne({
        where: {
            correo_electronico: correo_electronico,
            contrasenia: contrasenia
        }
    })
    return existeContrasenia;
}

module.exports = {
    creationUsuario,
    updateUsuario,
    deleteUsuario,
    validacionCorreo,
    validacionNombreUsuario,
    validacionExisteUsuario,
    paginacion,
    validacionContrasenia
}