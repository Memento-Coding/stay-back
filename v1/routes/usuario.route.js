const {Router} = require('express');
const router = Router();
const usuariosControllers = require('../../controllers/usuario.controller');
const checkAuth = require('../../middlewares/auth');
const { esAdmin } = require('../../middlewares/verify-rol');

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Obtiene una lista de todos los usuarios
 *     tags: [Usuario]
 *     responses:
 *       200:
 *         description: Lista de los usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 */
router.get('', [
    checkAuth,
    esAdmin
], usuariosControllers.getUsuarios);
/**
 * @swagger
 * /user:
 *   post:
 *     summary: Agregar un usuario
 *     tags: [Usuario]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Agregar un usuario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 */
router.post('', usuariosControllers.creationUsuario);

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Modificar un usuario
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del usuario a modificar
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Objeto de usuario para modificar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuario modificado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 */
router.put('/:id', [
    checkAuth,
    esAdmin
], usuariosControllers.updateUsuario);

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Eliminar un usuario
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 usuario_id:
 *                   type: integer
 *                   example: 1
 *                 correo_electronico:
 *                   type: string
 *                   example: usuario@correo.com
 *                 contrasenia:
 *                   type: string
 *                   example: "123456"
 *                 nombre_usuario:
 *                   type: string
 *                   example: usuario1
 *                 rol_id:
 *                   type: integer
 *                   example: 1
 */
router.delete('/:id', [
    checkAuth,
    esAdmin
], usuariosControllers.deleteUsuario)


module.exports = router;