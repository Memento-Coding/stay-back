const jwt = require('jsonwebtoken');
const rolServices = require('../services/rol.service');
require('dotenv').config();

const tokenSign = async (usuario)=>{
    const {usuario_id, correo_electronico, nombre_usuario, rol_id} = usuario;
    const {nombre_rol} = await rolServices.validacionExisteRol(rol_id);
    return jwt.sign(
        {
            usuario_id,
            rol: nombre_rol,
            nombre: nombre_usuario,
            correo_electronico
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"6h"
        }
    );
}

module.exports = {
    tokenSign
}