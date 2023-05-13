const sitioTuristico_x_eventoServices = require('../services/sitioturistico_x_evento.service');

const getSitioturistico_x_Evento = async (req, res) => {
    const getAllSitioxEvento = await sitioTuristico_x_eventoServices.getAllSitioTuristico_X_Evento();

    res.json(getAllSitioxEvento);
}

const getEvento_x_Sitioturistico = async (req, res) => {
    const getAllEventoxSitio = await sitioTuristico_x_eventoServices.getAllEvento_X_SitioTuristico();

    res.json(getAllEventoxSitio);
}

module.exports = {
    getSitioturistico_x_Evento,
    getEvento_x_Sitioturistico
}