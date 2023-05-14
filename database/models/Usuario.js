const { DataTypes } = require('sequelize');
const db = require('../connection');
const Rol = require('./Rol');

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
        type: DataTypes.INTEGER,
        references: {
            model: Rol,
            key: 'rol_id'
        }
    },
    foto: {
        type: DataTypes.STRING(256),
    }},
    {
    timestamps: false,
    freezeTableName: true,
    tableName: 'usuario'
});


Usuario.prototype.toJSON = function(){
    let values = Object.assign({}, this.get());
    
    delete values.contrasenia;
    return values;
}

Usuario.belongsTo(Rol, {foreignKey: 'rol_id'});

module.exports = Usuario;