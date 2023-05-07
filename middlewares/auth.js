const {verifyToken} = require('../helpers/verify-jwt');
const usuarioServices = require('../services/usuario.service');

const checkAuth = async (req,res,next) =>{
    try {
        const token = req.headers.authorization.split(' ').pop();
        const tokenData = await verifyToken(token);
        console.log("TOKEN: " + token)
        const existeUsuario = await usuarioServices.validacionExisteUsuario(tokenData.usuario_id);
        if (!existeUsuario) {
            return res.status(401).json({
                msg: 'Token no valido - usuario no existe en la BD'
            });
        }        
        if(tokenData.correo_electronico){
            next()
        }else{
            res.status(401);
            res.send({error:"Token no valido"});
        }
    } catch (error) {
        res.status(401);
        res.send({error:"Sin autorizacion"})
    }
}

module.exports = checkAuth