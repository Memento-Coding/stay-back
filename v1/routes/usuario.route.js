const {Router} = require('express');
const router = Router();
const usuariosControllers = require('../../controllers/usuario.controller');

router.get('', usuariosControllers.getUsuarios);
router.post('', usuariosControllers.creationUsuario);
router.put('/:id', usuariosControllers.updateUsuario);
router.delete('/:id', usuariosControllers.deleteUsuario)

module.exports = router;