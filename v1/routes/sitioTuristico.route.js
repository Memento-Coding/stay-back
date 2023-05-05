const { Router } = require('express');
const router = Router();
const sitioTuristicoController = require('../../controllers/sitioTuristico.controller');

router.get('/', sitioTuristicoController.getAllSitiosTuristicos);
router.post('/', sitioTuristicoController.createSitioTuristico);
router.put('/:id', sitioTuristicoController.updateSitioTuristico);
router.delete('/:id', sitioTuristicoController.deleteSitioTuristico);

module.exports = router;
