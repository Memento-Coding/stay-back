const jwt = require('jsonwebtoken');
require('dotenv').config();
const tokenSign = async (usuario)=>{
    const {usuario_id, correo_electronico, nombre_usuario, rol_id} = usuario;
    return jwt.sign(
        {
            usuario_id,
            rol:rol_id,
            nombre:nombre_usuario,
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