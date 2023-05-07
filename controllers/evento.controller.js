const Evento = require('../database/models/Evento');

const getAllEventos = async (req, res) => {
  try {
    const allEventos = await Evento.findAll();
    res.status(200).json(allEventos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener todos los eventos' });
  }
}

const createEvento = async (req, res) => {
  try {
    const newEvento = req.body;
    const eventoCreated = await Evento.create(newEvento);
    res.status(201).json(eventoCreated);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear un evento' });
  }
}

const updateEvento = async (req, res) => {
  try {
    const id = req.params.id;
    const evento = req.body;
    const eventoUpdated = await Evento.update(evento, {
      where: {
        evento_id: id
      }
    });
    res.status(200).json(eventoUpdated);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el evento' });
  }
}

const deleteEvento = async (req, res) => {
  try {
    const id = req.params.id;
    const evento = await Evento.findByPk(id);
    await evento.destroy();
    res.status(200).json({ message: 'Evento eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el evento' });
  }
}

module.exports = {
  getAllEventos,
  createEvento,
  updateEvento,
  deleteEvento
};
