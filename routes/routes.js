const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

/**
 * @swagger
 * /add:
 *   post:
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the new user
 *               email:
 *                 type: string
 *                 description: The email of the new user
 *               age:
 *                 type: integer
 *                 description: The age of the new user
 *     responses:
 *       '201':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       '400':
 *         description: Bad request (e.g., invalid data in request body)
 */
router.post("/add", userController.postUser);

/**
 * @swagger
 * /update/{id}:
 *   put:
 *     summary: Update a user
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *         description: The ID of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The updated name of the user
 *               email:
 *                 type: string
 *                 description: The updated email of the user
 *               age:
 *                 type: integer
 *                 description: The updated age of the user
 *     responses:
 *       '200':
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *       '400':
 *         description: Bad request (e.g., invalid data in request body or user not found)
 *       '404':
 *         description: User not found
 */
router.put("/update/:id", userController.putUser);

/**
 * @swagger
 * /delete/{id}:
 *   delete:
 *     summary: Delete a user
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *         description: The ID of the user to delete
 *     responses:
 *       '200':
 *         description: User deleted successfully
 *       '400':
 *         description: Bad request (e.g., invalid user ID)
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.delete("/delete/:id", userController.deleteUser);

/**
 * @swagger
 * /get/{id}:
 *   get:
 *     summary: Get a user by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *         description: The ID of the user to retrieve
 *     responses:
 *       '200':
 *         description: User retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       '400':
 *         description: Bad request (e.g., invalid user ID)
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.get("/get/:id", userController.getUser);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: List of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       '500':
 *         description: Internal server error
 */
router.get("/get", userController.getAllUsers);

module.exports = router;
