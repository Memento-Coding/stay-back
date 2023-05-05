const Evento = require('../database/models/Evento');

const getAllEventos = async () => {
  const allEventos = await Evento.findAll();
  return allEventos;
}

const createEvento = async (newEvento) => {
  const eventoCreated = await Evento.create(newEvento);
  return eventoCreated;
}

const updateEvento = async (evento, id) => {
  const eventoUpdated = await Evento.update(evento, {
    where: {
      evento_id: id
    }
  });
  return eventoUpdated;
}

const deleteEvento = async (evento) => {
  const eventoDeleted = await evento.destroy();
  return eventoDeleted;
}

module.exports = {
  getAllEventos,
  createEvento,
  updateEvento,
  deleteEvento
};
