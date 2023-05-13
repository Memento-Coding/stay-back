const { DataTypes } = require('sequelize');
const db = require('../connection');
const SitioTuristico = require('./SitioTuristico');
const Evento = require('./Evento');


const SitioTuristico_X_Evento = db.define('sitio_turistico_x_evento', {
    sitio_turistico_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: SitioTuristico,
          key: 'sitio_turistico_id'
        }
      },
      evento_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Evento,
          key: 'evento_id'
        }
      }
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'sitio_turistico_x_evento'
    });

SitioTuristico.belongsToMany(Evento, {
    through: SitioTuristico_X_Evento,
    foreignKey: 'sitio_turistico_id'
})

Evento.belongsToMany(SitioTuristico, {
    through: SitioTuristico_X_Evento,
    foreignKey: 'evento_id'
})

module.exports = SitioTuristico_X_Evento;