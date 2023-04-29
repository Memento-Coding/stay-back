const {Router} = require('express');
const router = Router();
const usuariosControllers = require('../../controllers/usuario.controller');

router.post('' ,usuariosControllers.creationUsuarios);

module.exports = router;