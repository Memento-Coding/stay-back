const { DataTypes } = require('sequelize');
const db = require('../connection');

const Usuario = db.define('usuario', {
    usuario_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    correo_electronico: {
        type: DataTypes.STRING
    },
    contrasenia: {
        type: DataTypes.STRING
    },
    nombre_usuario: {
        type: DataTypes.STRING
    },
    rol_id: {
        type: DataTypes.INTEGER
    }},
    {
    timestamps: false,
    freezeTableName: true
});

Usuario.prototype.toJSON = function(){
    let values = Object.assign({}, this.get());
 
    delete values.contrasenia;
    return values;
}
 
module.exports = Usuario;