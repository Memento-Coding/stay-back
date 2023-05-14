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

    // Validación de campos obligatorios
    if (!newEvento.titulo || !newEvento.fecha || !newEvento.descripcion) {
      return res.status(400).json({ error: 'Falta completar campos obligatorios' });
    }

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

    // Validación de campos obligatorios
    if (!evento.titulo || !evento.fecha || !evento.descripcion) {
      return res.status(400).json({ error: 'Falta completar campos obligatorios' });
    }

    const eventoUpdated = await Evento.update(evento, {
      where: {
        evento_id: id
      }
    });

    // Validación de que el evento existe
    if (!eventoUpdated[0]) {
      return res.status(404).json({ error: 'El evento que intenta actualizar no existe' });
    }

    res.status(200).json(eventoUpdated);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el evento' });
  }
}

const deleteEvento = async (req, res) => {
  try {
    const id = req.params.id;
    const evento = await Evento.findByPk(id);

    // Validación de que el evento existe
    if (!evento) {
      return res.status(404).json({ error: 'El evento que intenta eliminar no existe' });
    }

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
