const SitioTuristico = require('../database/models/SitioTuristico');
const Evento = require('../database/models/Evento');
require('../database/models/SitioTuristico_X_Evento');

const getAllSitioTuristico_X_Evento = async () => {
    const sitiosXeventos = await SitioTuristico.findAll({include: Evento});
    return sitiosXeventos;
}

const getAllEvento_X_SitioTuristico = async () => {
    const sitiosXeventos = await Evento.findAll({include: SitioTuristico});
    return sitiosXeventos;
}

module.exports = {
    getAllSitioTuristico_X_Evento,
    getAllEvento_X_SitioTuristico
}