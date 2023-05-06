const {Router} = require('express');
const router = Router();
const rolControllers = require('../../controllers/rol.controller');

router.get('', rolControllers.getAllRoles);
router.post('', rolControllers.creationRol);
router.put('/:id', rolControllers.updateRol);
router.delete('/:id', rolControllers.deleteRol)

module.exports = router;