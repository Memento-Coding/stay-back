const Evento = require('../database/models/Evento');

const getAllEventos = async () => {
  const allEventos = await Evento.findAll();
  return allEventos;
}

const createEvento = async (newEvento) => {
  const eventoExists = await Evento.findOne({ where: { nombre_evento: newEvento.nombre_evento } });
  if (eventoExists) {
    throw new Error(`El evento '${newEvento.nombre_evento}' ya existe en la base de datos`);
  }
  const eventoCreated = await Evento.create(newEvento);
  return eventoCreated;
}


const updateEvento = async (evento, id) => {
  const existeEvento = await Evento.findByPk(id);
  if (!existeEvento) {
    throw new Error('No se puede actualizar. El evento no existe.');
  }
  const eventoUpdated = await Evento.update(evento, {
    where: {
      evento_id: id
    }
  });
  return eventoUpdated;
}

const deleteEvento = async (id) => {
  const evento = await Evento.findByPk(id);
  if (!evento) {
    throw new Error('No se puede eliminar. El evento no existe.');
  }
  const comentarios = await evento.getComentarios();
  if (comentarios.length > 0) {
    throw new Error('No se puede eliminar. El evento tiene comentarios asociados.');
  }
  const eventoDeleted = await evento.destroy();
  return eventoDeleted;
}

module.exports = {
  getAllEventos,
  createEvento,
  updateEvento,
  deleteEvento
};
