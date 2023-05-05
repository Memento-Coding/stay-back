const { Router } = require('express');
const router = Router();
const eventosController = require('../../controllers/evento.controller');

router.get('', eventosController.getAllEventos);
router.post('', eventosController.createEvento);
router.put('/:id', eventosController.updateEvento);
router.delete('/:id', eventosController.deleteEvento);

module.exports = router;
