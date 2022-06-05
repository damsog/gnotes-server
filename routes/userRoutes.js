const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

/**
 * @swagger
 * /api/users/getAll:
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
router.get('/getAll', usersController.getAll );

/**
 * @swagger
 * /api/users/getById/{id}:
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
router.get('/getById/:id', usersController.getById );

/**
 * @swagger
 * /api/users/getByUsername/{username}:
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
router.get('/getByUsername/:username', usersController.getByUsername );

/**
 * @swagger
 * /api/users/getByEmail/{email}:
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
router.get('/getByEmail/:email', usersController.getByEmail );

/**
 * @swagger
 * /api/users/update/{id}:
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
 *                      $ref: '#/components/schemas/userToUpdate'
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
router.put('/update/:id', usersController.update );

/**
 * @swagger
 * /api/users/delete/{id}:
 *  delete:
 *      summary: Deletes a user by id
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
 *              description: If operation was succesful
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *          404:
 *              description: User not found
 *                                
 */
router.delete('/delete/:id', usersController.delete );

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

/**
 * @swagger
 * components:
 *  schemas:
 *      userToUpdate:
 *          type: object
 *          properties:
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
*/
module.exports = router;