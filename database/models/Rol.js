const { DataTypes } = require('sequelize');
const db = require('../connection');

const Rol = db.define('rol', {
    rol_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    nombre_rol:{
        type: DataTypes.STRING
    }},
    {
    timestamps: false,
    freezeTableName: true
});
 
module.exports = Rol;