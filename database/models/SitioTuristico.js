const { DataTypes } = require('sequelize');
const db = require('../connection');

const SitioTuristico = db.define('sitio_turistico', {
  sitio_turistico_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(128),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING(256),
    allowNull: false
  },
  ubicacion: {
    type: DataTypes.STRING(256),
    allowNull: false
  },
  foto: {
    type: DataTypes.STRING(256),
    allowNull: false
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'sitio_turistico'
});

module.exports = SitioTuristico;
