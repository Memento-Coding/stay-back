const usuarioServices = require('../services/usuario.service');

const getUsuarios = async (req,res) => {
    const usuario = await usuarioServices.getAllUsuarios();
    res.json(usuario);
}

const creationUsuario = async (req,res) => {

    const {body} = req;

    try {

        const validarEmail = await usuarioServices.validacionCorreo(body.correo_electronico);
        const validacionNombreUsuario = await usuarioServices.validacionNombreUsuario(body.nombre_usuario);
        if (validarEmail) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el correo ' + body.correo_electronico
            });
        }
        if (validacionNombreUsuario) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con ese nombre de usuario ' + body.nombre_usuario
            });
        }

        const usuarioCreated = await usuarioServices.creationUsuario(body);
        res.json(usuarioCreated);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error en el servidor, hable con el administrador'
        })
    }

}

const updateUsuario = async (req,res) => {

    const {id} = req.params;
    const {body} = req;

    try {

        const existeUsuario = await usuarioServices.validacionExisteUsuario(id);        
        
        if (!existeUsuario){
            return res.status(404).json({
                msg: 'No existe usuario con el id ' + id
            });
        }
        switch (existeUsuario) {
            
            case existeUsuario.correo_electronico != body.correo_electronico:
                const validarEmail = await usuarioServices.validacionCorreo(body.correo_electronico);        
                if (validarEmail) {
                    return res.status(400).json({
                        msg: 'Ya existe un usuario con el correo ' + body.correo_electronico
                    });
                }
                break;
            
            case existeUsuario.nombre_usuario != body.nombre_usuario:
                const validacionNombreUsuario = await usuarioServices.validacionNombreUsuario(body.nombre_usuario);
                if (validacionNombreUsuario) {
                    return res.status(400).json({
                        msg: 'Ya existe un usuario con ese nombre de usuario ' + body.nombre_usuario
                    });
                }
                break;

            default:
                break;
        }
        

        await usuarioServices.updateUsuario(body, id);
        res.json(body);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error en el servidor, hable con el administrador'
        })
    }

}

const deleteUsuario = async (req, res) => {
    const {id} = req.params;

    const existeUsuario = await usuarioServices.validacionExisteUsuario(id);
    if (!existeUsuario){
        return res.status(404).json({
            msg: 'No existe usuario con el id ' + id
        });
    }
    
    await usuarioServices.deleteUsuario(existeUsuario);
    res.json({
        msg: `Usuario con el id ${id} ha sido eliminado.`
    });
}


module.exports = {
    getUsuarios,
    creationUsuario,
    updateUsuario,
    deleteUsuario
}