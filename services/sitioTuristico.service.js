const SitioTuristico = require('../database/models/SitioTuristico');


const getAllSitiosTuristicos = async () => {
  const sitiosTuristicos = await SitioTuristico.findAll();
  return sitiosTuristicos;
}

const createSitioTuristico = async (newSitioTuristico) => {
  const existingSitioTuristico = await SitioTuristico.findOne({
    where: { nombre: newSitioTuristico.nombre }
  });

  if (existingSitioTuristico) {
    throw new Error('Ya existe un sitio turístico con el mismo nombre');
  }

  const sitioTuristicoCreated = await SitioTuristico.create(newSitioTuristico);
  return sitioTuristicoCreated;
}


const updateSitioTuristico = async (sitioTuristico, id) => {
  const sitioTuristicoExist = await SitioTuristico.findByPk(id);
  if (!sitioTuristicoExist) {
    throw new Error('El sitio turistico con el id proporcionado no existe');
  }

  const sitioTuristicoUpdated = await SitioTuristico.update(sitioTuristico, {
    where: {
      sitio_turistico_id: id
    }
  });
  return sitioTuristicoUpdated;
}


const deleteSitioTuristico = async (id) => {
  const sitioTuristico = await SitioTuristico.findByPk(id);
  if (!sitioTuristico) {
    throw new Error('El sitio turístico no existe en la base de datos');
  }

  const comentarios = await Comentario.findAll({
    where: {
      sitio_turistico_id: id
    }
  });
  if (comentarios.length > 0) {
    throw new Error('No se puede eliminar el sitio turístico porque tiene comentarios asociados');
  }

  const valoraciones = await Valoracion.findAll({
    where: {
      sitio_turistico_id: id
    }
  });
  if (valoraciones.length > 0) {
    throw new Error('No se puede eliminar el sitio turístico porque tiene valoraciones asociadas');
  }

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
