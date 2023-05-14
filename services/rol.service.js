const Rol = require('../database/models/Rol');

const getAllRoles = async () => {
    const allRoles = await Rol.findAll();
    return allRoles;
}

const creationRol = async (newRol)=> {
    const rolCreated = new Rol(newRol);
    await rolCreated.save();
    return rolCreated;
}

const updateRol = async (rol, id)=> {
    const rolUpdated = await Rol.update(rol, {
        where: {
            rol_id: id
        }
    });
    return rolUpdated;
}

const deleteRol = async (rol)=> {
    const rolDeleted = await rol.destroy();
    return rolDeleted;
}

const validacionRol = async (rol) => {
    const existeRol = await Rol.findOne({
        where: {
            nombre_rol: rol
        }
    })
    return existeRol;
}

const validacionExisteRol = async (id) => {
    const existeRol = await Rol.findByPk(id)
    return existeRol;
}

module.exports = {
    creationRol,
    getAllRoles,
    updateRol,
    deleteRol,
    validacionExisteRol,
    validacionRol
}