const { Router } = require('express');
const router = Router();
const sitioTuristico_x_EventoController = require('../../controllers/sitioTuristico_X_evento.controller');

router.get('/sitioTuristico', sitioTuristico_x_EventoController.getSitioturistico_x_Evento);
router.get('/evento', sitioTuristico_x_EventoController.getEvento_x_Sitioturistico);

module.exports = router;
