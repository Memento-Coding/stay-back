const { DataTypes } = require('sequelize');
const db = require('../connection');

const Evento = db.define('evento', {
    evento_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING
    },
    fecha_hora: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'evento'
  });
  
  module.exports = Evento;