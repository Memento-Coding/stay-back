const { Router } = require('express');
const router = Router();
const sitioTuristicoController = require('../../controllers/sitioTuristico.controller');

/**
 * @swagger
 * /sitio-turistico:
 *   get:
 *     summary: Obtiene una lista de todos los sitios Turisticos
 *     tags: [SitioTuristico]
 *     responses:
 *       200:
 *         description: Lista de los sitios Turisticos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SitioTuristico'
 */
router.get('/', sitioTuristicoController.getAllSitiosTuristicos);
/**
 * @swagger
 * /sitio-turistico:
 *   post:
 *     summary: Agregar un sitio Turistico
 *     tags: [SitioTuristico]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SitioTuristico'
 *     responses:
 *       201:
 *         description: Se ha creado el sitio turístico correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SitioTuristico'
 *       400:
 *         description: Los datos del sitio turístico son inválidos
 */
router.post('/', sitioTuristicoController.createSitioTuristico);

/**
 * @swagger
 * /sitio-turistico/{id}:
 *   put:
 *     summary: Modificar un sitio Turistico
 *     tags: [SitioTuristico]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del sitio turístico a modificar
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     requestBody:
 *       description: Objeto de tipo SitioTuristico con los nuevos datos a modificar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SitioTuristico'
 *     responses:
 *       200:
 *         description: Sitio Turistico modificado
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SitioTuristico'
 */
router.put('/:id', sitioTuristicoController.updateSitioTuristico);

/**
 * @swagger
 * /sitio-turistico/{id}:
 *   delete:
 *     summary: Eliminar un sitio Turistico por ID
 *     tags: [SitioTuristico]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del sitio turístico a eliminar
 *     responses:
 *       200:
 *         description: Sitio turístico eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SitioTuristico'
 *       404:
 *         description: No se encontró el sitio turístico con el ID proporcionado
 */
router.delete('/:id', sitioTuristicoController.deleteSitioTuristico);


module.exports = router;
