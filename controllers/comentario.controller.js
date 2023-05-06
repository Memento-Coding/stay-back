const comentarioService = require('../services/comentario.service');

const getAllComentarios = async (req, res) => {
  try {
    const comentarios = await comentarioService.getAllComentarios();
    res.status(200).json(comentarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los comentarios' });
  }
}

const createComentario = async (req, res) => {
  try {
    const { comentario_id, ...newComentario } = req.body; // aquí se elimina la propiedad comentario_id del objeto req.body
    const comentarioCreated = await comentarioService.createComentario(newComentario);
    res.status(201).json(comentarioCreated);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el comentario' });
  }
}

const updateComentario = async (req, res) => {
  try {
    const id = req.params.id;
    const comentario = req.body;
    const comentarioUpdated = await comentarioService.updateComentario(comentario, id);
    res.status(200).json(comentarioUpdated);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el comentario' });
  }
}


const deleteComentario = async (req, res) => {
    try {
      const id = req.params.id;
      await comentarioService.deleteComentario(id);
      res.status(200).json({ message: 'Comentario eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el comentario' });
    }
  }
  
  module.exports = {
    getAllComentarios,
    createComentario,
    updateComentario,
    deleteComentario
  };
