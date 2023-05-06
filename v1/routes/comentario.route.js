const { Router } = require('express');
const router = Router();
const comentarioController = require('../../controllers/comentario.controller');

/**
 * @swagger
 * /comentario:
 *   get:
 *     summary: Obtiene una lista de todos los comentarios
 *     tags: [Comentario]
 *     responses:
 *       200:
 *         description: Lista de comentarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comentario'
 */
router.get('/', comentarioController.getAllComentarios);
/**
 * @swagger
 * /comentario:
 *   post:
 *     summary: Agregar un comentario
 *     tags: [Comentario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comentario'
 *     responses:
 *       201:
 *         description: Comentario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comentario'
 *       500:
 *         description: Error al crear el comentario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 */
router.post('/', comentarioController.createComentario);

/**
 * @swagger
 * /comentario/{id}:
 *   put:
 *     summary: Modificar un comentario
 *     tags: [Comentario]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del evento a modificar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comentario'
 *     responses:
 *       200:
 *         description: Modificar un comentario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comentario'
 */
router.put('/:id', comentarioController.updateComentario);

/**
 * @swagger
 * /comentario/{id}:
 *   delete:
 *     summary: Eliminar un comentarios
 *     tags: [Comentario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del comentario a eliminar
 *     responses:
 *       200:
 *         description: Eliminar un comentarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comentario'
 */
router.delete('/:id', comentarioController.deleteComentario);


module.exports = router;
