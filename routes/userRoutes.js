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

/**
 * @swagger
 * /api/users/getUserById/{id}:
 *  get:
 *      summary: Return user by id
 *      security:
 *          - bearerAuth: []
 *      tags: [Users]
 *      parameters:
 *          -   in: path
 *              name: id
 *              schema:
 *                  type: string
 *              required: true
 *              description: user id
 *      responses:
 *          200:
 *              description: list of all users
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/user'
 *          404:
 *              description: User not found
 *                                
 */
router.get('/getUserById/:id', usersController.getUserById );

/**
 * @swagger
 * /api/users/getUserByUsername/{username}:
 *  get:
 *      summary: Return user by username
 *      security:
 *          - bearerAuth: []
 *      tags: [Users]
 *      parameters:
 *          -   in: path
 *              name: username
 *              schema:
 *                  type: string
 *              required: true
 *              description: username
 *      responses:
 *          200:
 *              description: list of all users
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/user'
 *          404:
 *              description: User not found
 *                                
 */
router.get('/getUserByUsername/:username', usersController.getUserByUsername );

/**
 * @swagger
 * /api/users/getUserByEmail/{email}:
 *  get:
 *      summary: Return user by email
 *      security:
 *          - bearerAuth: []
 *      tags: [Users]
 *      parameters:
 *          -   in: path
 *              name: email
 *              schema:
 *                  type: string
 *              required: true
 *              description: email
 *      responses:
 *          200:
 *              description: list of all users
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/user'
 *          404:
 *              description: User not found
 *                                
 */
router.get('/getUserByEmail/:email', usersController.getUserByEmail );

/**
 * @swagger
 * /api/users/updateUser/{id}:
 *  put:
 *      summary: Updates user
 *      security:
 *          - bearerAuth: []
 *      tags: [Users]
 *      parameters:
 *          -   in: path
 *              name: id
 *              schema:
 *                  type: string
 *              required: true
 *              description: user id
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/user'
 *      responses:
 *          200:
 *              description: If operation was succesful
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/user'
 *          404:
 *              description: User not found
 *                                
 */
router.put('/updateUser/:id', usersController.updateUser );
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