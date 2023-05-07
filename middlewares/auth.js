const {verifyToken} = require('../helpers/verify-jwt');
const checkAuth = async (req,res,next) =>{
    try {
        const token = req.headers.authorization.split(' ').pop();
        const tokenData = await verifyToken(token);
        console.log("TOKEN: " + token)
        if(!token) {
            return res.status(401).json ({
                msg: 'No hay token en la peticion'
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