const usuarioService = require('../services/usuario.service');

const login = async (req, res) => {
    try {
        const { correo_electronico, contrasenia } = req.body;
        const validacionCorreo = await usuarioService.validacionCorreo(correo_electronico);
        const validacionContrasenia = await usuarioService.validacionContrasenia(contrasenia, correo_electronico);
        
        if (!validacionCorreo){
            return res.status(404).json({
                msg: 'No existe usuario con el correo: ' + correo_electronico
            });
        }
        if (!validacionContrasenia) {
            return res.status(401).json({
                msg: 'Contrasenia incorrecta'
            });
        }

        res.status(200).json({
            msg: 'Ha accedido satisfactoriamente.',
            correo_electronico,
        })
        
        
    } catch (error) {
        
    }
}

module.exports = {
    login
}