const pool = require("../db")

const createUsuario = async (Usuario) => {
    const {correo_electronico, contrasenia, nombre_usuario, rol_id} = Usuario;

    try {
        let query = await pool.query("INSERT INTO USUARIO (CORREO_ELECTRONICO, CONTRASENIA, NOMBRE_USUARIO, ROL_ID) VALUES ($1,$2,$3,$4)",
        [correo_electronico, contrasenia, nombre_usuario, rol_id]);

        return query;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createUsuario
}

