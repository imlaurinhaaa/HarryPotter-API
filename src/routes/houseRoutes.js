const express = require("express");
const router = express.Router();
const houseController = require("../controllers/houseController");

/**
 * @swagger
 * tags:
 *  name: Houses
 *  description: Gerenciamento de casas
 */

/**
 * @swagger
 * /api/houses:
 *   get:
 *     summary: Lista todas as casas
 *     tags: [Houses]
 *     responses:
 *       200:
 *         description: Casas retornadas com sucesso
 */

/**
 * @swagger
 * /api/houses/{id}:
 *   get:
 *     summary: Busca uma casa por ID
 *     tags: [Houses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Casa encontrada com sucesso
 *       404:
 *         description: Casa não encontrada
 */

/**
 * @swagger
 * /api/houses:
 *   post:
 *     summary: Cria uma nova casa
 *     tags: [Houses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               founder:
 *                 type: string
 *     responses:
 *       201:
 *         description: Casa criada com sucesso
 */


router.get("/", houseController.getAllHouses);
router.get("/:id", houseController.getHouse);
router.post("/", houseController.createHouse);
router.put("/:id", houseController.updateHouse);
router.delete("/:id", houseController.deleteHouse);

module.exports = router;