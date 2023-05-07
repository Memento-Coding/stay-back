const {Router} = require('express');
const router = Router();
const rolControllers = require('../../controllers/rol.controller');
const checkAuth = require('../../middlewares/auth');

router.get('', checkAuth, rolControllers.getAllRoles);
router.post('', checkAuth, rolControllers.creationRol);
router.put('/:id', checkAuth, rolControllers.updateRol);
router.delete('/:id', checkAuth, rolControllers.deleteRol)

module.exports = router;