const { Router } = require('express');
const router = Router();
const calificacionController = require('../../controllers/calificacion.controller');

/**
 * @swagger
 * /calificacion:
 *   get:
 *     summary: Obtiene una lista de todas las calificaciones
 *     tags: [Calificación]
 *     responses:
 *       200:
 *         description: Lista de calificaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Calificacion'
 */
router.get('/', calificacionController.getAllCalificaciones);

/**
 * @swagger
 * /calificacion:
 *   post:
 *     summary: Agrega una nueva calificación
 *     tags: [Calificación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Calificacion'
 *     responses:
 *       201:
 *         description: Calificación creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Calificacion'
 *       500:
 *         description: Error al crear la calificación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 */
router.post('/', calificacionController.createCalificacion);

/**
 * @swagger
 * /calificacion/{id}:
 *   put:
 *     summary: Modifica una calificación existente
 *     tags: [Calificación]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la calificación a modificar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Calificacion'
 *     responses:
 *       200:
 *         description: Calificación modificada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Calificacion'
 
 */
router.put('/:id', calificacionController.updateCalificacion);

/**
 * @swagger
 * /calificacion/{id}:
 *   delete:
 *     summary: Elimina una calificación existente
 *     tags: [Calificación]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la calificación a eliminar
 *     responses:
 *       200:
 *         description: Calificación eliminada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 */
router.delete('/:id', calificacionController.deleteCalificacion);

module.exports = router;
