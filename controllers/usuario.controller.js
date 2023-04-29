const usuarioServices = require('../services/usuario.service');

const creationUsuarios = async (req,res) => {
    const {correo_electronico, contrasenia, nombre_usuario, rol_id} = req.body;
    const Usuario = {
        correo_electronico,
        contrasenia,
        nombre_usuario,
        rol_id
    }

    const usuarioCreated = await usuarioServices.creationUsuarios(Usuario);
    //TODO: Validar si se creo el usuario o no
}

module.exports = {
    creationUsuarios
}