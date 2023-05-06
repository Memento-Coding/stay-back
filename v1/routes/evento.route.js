const { Router } = require('express');
const router = Router();
const eventosController = require('../../controllers/evento.controller');

/**
 * @swagger
 * /evento:
 *   get:
 *     summary: Obtiene una lista de todos los eventos
 *     tags: [Eventos]
 *     responses:
 *       200:
 *         description: Lista de eventos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Evento'
 */
router.get('', eventosController.getAllEventos);
/**
 * @swagger
 * /evento:
 *   post:
 *     summary: Agregar un eventos
 *     tags: [Eventos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Evento'
 *     responses:
 *       200:
 *         description: Agregar un eventos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Evento'
 */
router.post('', eventosController.createEvento);
/**
 * @swagger
 * /evento/{id}:
 *   put:
 *     summary: Modificar un eventos
 *     tags: [Eventos]
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
 *             $ref: '#/components/schemas/Evento'
 *     responses:
 *       200:
 *         description: Modificar un eventos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Evento'
 */
router.put('/:id', eventosController.updateEvento);

/**
 * @swagger
 * /evento/{id}:
 *   delete:
 *     summary: Eliminar un eventos
 *     tags: [Eventos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del evento a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Eliminar un eventos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Evento'
 */
router.delete('/:id', eventosController.deleteEvento);


module.exports = router;
