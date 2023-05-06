const { Router } = require('express');
const router = Router();
const rolController = require('../../controllers/rol.controller');

/**
 * @swagger
 * tags:
 *   name: Roles
 */

/**
 * @swagger
 * /rol:
 *   get:
 *     summary: Obtiene una lista de todos los roles
 *     tags: [Roles]
 *     responses:
 *       200:
 *         description: Lista de roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Rol'
 */
router.get('', rolController.getAllRoles);

/**
 * @swagger
 * /rol:
 *   post:
 *     summary: Agrega un rol
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Rol'
 *     responses:
 *       200:
 *         description: Rol creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rol'
 */
router.post('', rolController.creationRol);

/**
 * @swagger
 * /rol/{id}:
 *   put:
 *     summary: Modifica un rol existente
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del rol a modificar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Rol'
 *     responses:
 *       200:
 *         description: Rol modificado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rol'
 */
router.put('/:id', rolController.updateRol);

/**
 * @swagger
 * /rol/{id}:
 *   delete:
 *     summary: Elimina un rol existente
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del rol a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Rol eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rol'
 */
router.delete('/:id', rolController.deleteRol);

module.exports = router;
