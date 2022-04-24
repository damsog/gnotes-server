const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

/**
 * @swagger
 * /api/users/getAllUsers:
 *  get:
 *      summary: Return all users
 *      security:
 *          - bearerAuth: []
 *      tags: [Users]
 *      responses:
 *          200:
 *              description: list of all users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/user'
 *                                
 */
router.get('/getAllUsers', usersController.getAllUsers );
router.get('/getUserById', usersController.getUserById );
router.get('/getUserByUsername', usersController.getUserByUsername );
router.get('/getUserByEmail', usersController.getUserByEmail );
router.put('/updateUser', usersController.updateUser );
router.delete('/deleteUser', usersController.deleteUser );

/**
 * @swagger
 * components:
 *  schemas:
 *      user:
 *          type: object
 *          required:
 *              - username
 *              - password
 *          properties:
 *              id:
 *                  type: int
 *                  description: The auto-generated id of the user
 *              email:
 *                  type: string
 *                  description: Email set by user
 *              username:
 *                  type: string
 *                  description: Username set by user
 *              password:
 *                  type: string
 *                  description: key to access
 *              first_name:
 *                  type: string
 *                  description: first name of the user
 *              last_name:
 *                  type: string
 *                  description: last name of the user
 *              time_register:
 *                  type: string
 *                  description: time
 *              createdAt:
 *                  type: string
 *                  description: time
 *              updatedAt:
 *                  type: string
 *                  description: time
*/

module.exports = router;