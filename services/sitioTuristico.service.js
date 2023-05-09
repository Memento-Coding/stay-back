const SitioTuristico = require('../database/models/SitioTuristico');


const getAllSitiosTuristicos = async () => {
  const sitiosTuristicos = await SitioTuristico.findAll();
  return sitiosTuristicos;
}

const createSitioTuristico = async (newSitioTuristico) => {
  const sitioTuristicoCreated = await SitioTuristico.create(newSitioTuristico);
  return sitioTuristicoCreated;
}

const updateSitioTuristico = async (sitioTuristico, id) => {
  const sitioTuristicoUpdated = await SitioTuristico.update(sitioTuristico, {
    where: {
      sitio_turistico_id: id
    }
  });
  return sitioTuristicoUpdated;
}

const deleteSitioTuristico = async (id) => {
  const sitioTuristicoDeleted = await SitioTuristico.destroy({
    where: {
      sitio_turistico_id: id
    }
  });
  return sitioTuristicoDeleted;
}

const validacionExisteSitioTuristico = async (id) => {
  const existeSitioTuristico = await SitioTuristico.findByPk(id)
  return existeSitioTuristico;
}

module.exports = {
  getAllSitiosTuristicos,
  createSitioTuristico,
  updateSitioTuristico,
  deleteSitioTuristico,
  validacionExisteSitioTuristico
};
