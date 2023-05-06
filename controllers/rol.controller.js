const rolServices = require('../services/rol.service');

const getAllRoles = async (req,res) => {
    const allRoles = await rolServices.getAllRoles();

    res.json(allRoles);
};

const creationRol = async (req,res) => {

    const {body} = req;

    try {

        const validacionRol = await rolServices.validacionRol(body.nombre_rol);
        if (validacionRol) {
            return res.status(400).json({
                msg: 'Ya existe un rol con ese nombre ' + body.nombre_rol
            });
        }

        const creationRol = await rolServices.creationRol(body);
        res.json(creationRol);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error en el servidor, hable con el administrador'
        })
    }

}

const updateRol = async (req,res) => {

    const {id} = req.params;
    const {body} = req;

    try {

        const existeRol = await rolServices.validacionExisteRol(id);        
        
        if (!existeRol){
            return res.status(404).json({
                msg: 'No existe rol con el id ' + id
            });
        }
        const validacionRol = await rolServices.validacionRol(body.nombre_rol);
        if (validacionRol) {
            return res.status(400).json({
                msg: 'Ya existe un rol con ese nombre ' + body.nombre_rol
            });
        }

        await rolServices.updateRol(body, id);
        res.json(body);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error en el servidor, hable con el administrador'
        })
    }

}

const deleteRol = async (req, res) => {
    const {id} = req.params;

    const existeRol = await rolServices.validacionExisteRol(id);
    if (!existeRol){
        return res.status(404).json({
            msg: 'No existe rol con el id ' + id
        });
    }
    
    await rolServices.deleteRol(existeRol);
    res.json({
        msg: `Rol con el id ${id} ha sido eliminado.`
    });
}


module.exports = {
    getAllRoles,
    creationRol,
    updateRol,
    deleteRol
}