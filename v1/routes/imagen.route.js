const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const imagenControllers = require('../../controllers/imagen.controller');
const { validarArchivoSubir } = require('../../middlewares/verify-file');
const { coleccionesPermitidas } = require('../../helpers/coleccionesPermitidas');
const { validarCampos } = require('../../middlewares/validar-campos');

router.put('/:coleccion/:id', [
    validarArchivoSubir,
    check('coleccion').custom( c => coleccionesPermitidas (c, ['user', 'sitio-turistico'])),
    validarCampos
], imagenControllers.actualizarImagenCloudinary)

module.exports = router;