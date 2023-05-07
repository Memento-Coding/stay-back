const { DataTypes } = require('sequelize');
const db = require('../connection');
const Usuario = require('./Usuario');
const SitioTuristico = require('./sitioTuristico');

const Comentario = db.define('comentario', {
  comentario_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descripcion: {
    type: DataTypes.STRING(256),
    allowNull: false
  },
  fecha_publicacion: {
    type: DataTypes.DATE,
    allowNull: false
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: 'usuario_id'
    }
  },
  sitio_turistico_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: SitioTuristico,
      key: 'sitio_turistico_id'
    }
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'comentario'
});

module.exports = Comentario;
