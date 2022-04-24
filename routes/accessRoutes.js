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
 *                      $ref: '#/components/schemas/user'
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
router.post('/create', usersController.createUser );

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

module.exports = router;