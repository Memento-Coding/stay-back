const {Router} = require('express');
const router = Router();
const usuariosControllers = require('../../controllers/usuario.controller');
const checkAuth = require('../../middlewares/auth');

router.get('', checkAuth, usuariosControllers.getUsuarios);
router.post('', checkAuth, usuariosControllers.creationUsuario);
router.put('/:id', checkAuth, usuariosControllers.updateUsuario);
router.delete('/:id', checkAuth, usuariosControllers.deleteUsuario)

module.exports = router;