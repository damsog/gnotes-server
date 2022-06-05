const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');


/**
 * @swagger
 * /api/access/create:
 *  post:
 *      summary: Create a new user
 *      tags: [Access]
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/userToCreate'
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
router.post('/create', usersController.create );

/**
 * @swagger
 * /api/access/login:
 *  post:
 *      summary: Login
 *      tags: [Access]
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/user_access'
 *      responses:
 *          200:
 *              description: Access response with token
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/user'
 *                                
 */
router.post('/login', usersController.validateUser );

 /**
 * @swagger
 * components:
 *  schemas:
 *      user_access:
 *          type: object
 *          required:
 *              - username or email
 *              - password
 *          properties:
 *              username:
 *                  type: string
 *                  description: Username set by user
 *              password:
 *                  type: string
 *                  description: key to access
*/


/**
 * @swagger
 * components:
 *  schemas:
 *      userToCreate:
 *          type: object
 *          required:
 *              - username
 *              - password
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