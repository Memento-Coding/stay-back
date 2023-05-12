const calificacionService = require('../services/calificacion.service');

const getAllCalificaciones = async (req, res) => {
  try {
    const calificaciones = await calificacionService.getAllCalificaciones();
    res.status(200).json(calificaciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las calificaciones' });
  }
}

const createCalificacion = async (req, res) => {
  try {
    const { calificacion_id, ...newCalificacion } = req.body; 
    const calificacionCreated = await calificacionService.createCalificacion(newCalificacion);
    res.status(201).json(calificacionCreated);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la calificación' });
  }
}

const updateCalificacion = async (req, res) => {
    try {
      const id = req.params.id;
      const updatedCalificacion = await calificacionService.updateCalificacion(id, req.body);
      res.status(200).json(updatedCalificacion);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la calificación' });
    }
  }
  const deleteCalificacion = async (req, res) => {
    try {
      const id = req.params.id;
      await calificacionService.deleteCalificacion(id);
      res.status(200).json({ message: 'Calificación eliminada correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la calificación' });
    }
  }  
  
  module.exports = {
    getAllCalificaciones,
    createCalificacion,
    updateCalificacion,
    deleteCalificacion
  };
