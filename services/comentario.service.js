const Comentario = require('../database/models/Comentario');
const SitioTuristico = require('../database/models/sitioTuristico');
const Usuario = require('../database/models/Usuario');

const getAllComentarios = async () => {
  const comentarios = await Comentario.findAll({include: [{model: Usuario},{model: SitioTuristico}]});
  return comentarios;
}

const createComentario = async (newComentario) => {
  const comentarioCreated = await Comentario.create(newComentario);
  return comentarioCreated;
}

const updateComentario = async (comentario, id) => {
  const comentarioExiste = await Comentario.findByPk(id);
  if (!comentarioExiste) {
    throw new Error('El comentario con el ID proporcionado no existe en la base de datos');
  }
  const comentarioUpdated = await Comentario.update(comentario, {
    where: {
      comentario_id: id
    }
  });
  return comentarioUpdated;
}

const deleteComentario = async (id) => {
  const comentario = await validacionExisteComentario(id);
  const valoraciones = await comentario.getValoraciones();
  if (valoraciones.length > 0) {
    throw new Error('No se puede eliminar el comentario porque tiene valoraciones asociadas');
  }

  const comentariosEliminados = await Comentario.destroy({
    where: {
      comentario_id: id
    }
  });
  return comentariosEliminados;
}


module.exports = {
  getAllComentarios,
  createComentario,
  updateComentario,
  deleteComentario
};
