const Calificacion = require('../database/models/Calificacion');
const SitioTuristico = require('../database/models/sitioTuristico');
const Usuario = require('../database/models/Usuario');

const getAllCalificaciones = async () => {
    const allCalificaciones = await Calificacion.findAll();
    return allCalificaciones;
  }

  const createCalificacion = async (calificacion) => {
    // Validate that the required fields are present
    if (!calificacion.cantidad_estrellas || !calificacion.sitio_turistico_id || !calificacion.usuario_id) {
      throw new Error('Faltan campos requeridos para crear una calificación');
    }
  
    // Validate that the sitio_turistico_id exists
    const sitioTuristico = await SitioTuristico.findByPk(calificacion.sitio_turistico_id);
    if (!sitioTuristico) {
      throw new Error('El sitio turístico especificado no existe');
    }
  
    // Validate that the usuario_id exists
    const usuario = await Usuario.findByPk(calificacion.usuario_id);
    if (!usuario) {
      throw new Error('El usuario especificado no existe');
    }
  
    // Validate that a Calificacion does not already exist for this usuario and sitio_turistico
    const existingCalificacion = await Calificacion.findOne({
      where: {
        usuario_id: calificacion.usuario_id,
        sitio_turistico_id: calificacion.sitio_turistico_id
      }
    });
    if (existingCalificacion) {
      throw new Error('Ya existe una calificación para este usuario y sitio turístico');
    }
  
    // Create the new Calificacion
    const newCalificacion = await Calificacion.create(calificacion);
    return newCalificacion;
  };
  
  
  
  const updateCalificacion = async (id, calificacion) => {
    // Validate that the required fields are present
    if (!calificacion.cantidad_estrellas || !calificacion.sitio_turistico_id || !calificacion.usuario_id) {
      throw new Error('Faltan campos requeridos para actualizar una calificación');
    }
  
    // Validate that the sitio_turistico_id exists
    const sitioTuristico = await SitioTuristico.findByPk(calificacion.sitio_turistico_id);
    if (!sitioTuristico) {
      throw new Error('El sitio turístico especificado no existe');
    }
  
    // Validate that the usuario_id exists
    const usuario = await Usuario.findByPk(calificacion.usuario_id);
    if (!usuario) {
      throw new Error('El usuario especificado no existe');
    }
  
    // Find the Calificacion to update
    const calificacionToUpdate = await Calificacion.findByPk(id);
    if (!calificacionToUpdate) {
      throw new Error('No se puede actualizar. La calificación no existe.');
    }
  
    // Update the Calificacion
    const updatedCalificacion = await calificacionToUpdate.update(calificacion);
    return updatedCalificacion;
  }

const deleteCalificacion = async (id) => {
  const calificacion = await Calificacion.findByPk(id);
  if (!calificacion) {
    throw new Error('No se puede eliminar. La calificación no existe.');
  }
  const calificacionDeleted = await calificacion.destroy();
  return calificacionDeleted;
}

module.exports = {
  getAllCalificaciones,
  createCalificacion,
  updateCalificacion,
  deleteCalificacion
};
