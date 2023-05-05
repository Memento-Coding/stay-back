const sitioTuristicoService = require('../services/sitioTuristico.service');

const getAllSitiosTuristicos = async (req, res) => {
  try {
    const sitiosTuristicos = await sitioTuristicoService.getAllSitiosTuristicos();
    res.status(200).json(sitiosTuristicos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los sitios turísticos' });
  }
}

const createSitioTuristico = async (req, res) => {
  try {
    const newSitioTuristico = req.body;
    const sitioTuristicoCreated = await sitioTuristicoService.createSitioTuristico(newSitioTuristico);
    res.status(201).json(sitioTuristicoCreated);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el sitio turístico' });
  }
}

const updateSitioTuristico = async (req, res) => {
  try {
    const id = req.params.id;
    const sitioTuristico = req.body;
    const sitioTuristicoUpdated = await sitioTuristicoService.updateSitioTuristico(sitioTuristico, id);
    res.status(200).json(sitioTuristicoUpdated);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el sitio turístico' });
  }
}

const deleteSitioTuristico = async (req, res) => {
  try {
    const id = req.params.id;
    await sitioTuristicoService.deleteSitioTuristico(id);
    res.status(200).json({ message: 'Sitio turístico eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el sitio turístico' });
  }
}

module.exports = {
  getAllSitiosTuristicos,
  createSitioTuristico,
  updateSitioTuristico,
  deleteSitioTuristico
};
