const { Router } = require('express');
const router = Router();
const rolControllers = require('../../controllers/rol.controller');
const checkAuth = require('../../middlewares/auth');
const { esAdmin } = require('../../middlewares/verify-rol');

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
router.get('', [
    checkAuth,
    esAdmin
], rolControllers.getAllRoles);

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
router.post('', [
    checkAuth,
    esAdmin
], rolControllers.creationRol);

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
router.put('/:id', [
    checkAuth,
    esAdmin
], rolControllers.updateRol);

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
router.delete('/:id', [
    checkAuth,
    esAdmin
], rolControllers.deleteRol);

module.exports = router;
