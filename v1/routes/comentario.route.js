const { Router } = require('express');
const router = Router();
const comentarioController = require('../../controllers/comentario.controller');

router.get('/', comentarioController.getAllComentarios);
router.post('/', comentarioController.createComentario);
router.put('/:id', comentarioController.updateComentario);
router.delete('/:id', comentarioController.deleteComentario);

module.exports = router;
