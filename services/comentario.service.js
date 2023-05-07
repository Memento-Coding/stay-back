const Comentario = require('../database/models/Comentario');

const getAllComentarios = async () => {
  const comentarios = await Comentario.findAll();
  return comentarios;
}

const createComentario = async (newComentario) => {
  const comentarioCreated = await Comentario.create(newComentario);
  return comentarioCreated;
}

const updateComentario = async (comentario, id) => {
  const comentarioUpdated = await Comentario.update(comentario, {
    where: {
      comentario_id: id
    }
  });
  return comentarioUpdated;
}

const deleteComentario = async (id) => {
  const comentarioDeleted = await Comentario.destroy({
    where: {
      comentario_id: id
    }
  });
  return comentarioDeleted;
}

module.exports = {
  getAllComentarios,
  createComentario,
  updateComentario,
  deleteComentario
};
