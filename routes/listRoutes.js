const express = require('express');
const router = express.Router();
const listController = require('../controllers/listController');

/**
 * @swagger
 * /api/lists/create:
 *  post:
 *      summary: Create a new List
 *      tags: [Lists]
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/listToCreate'
 *      responses:
 *          200:
 *              description: List created
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/list'
 *                                
 */
router.post('/create', listController.create);

/**
 * @swagger
 * /api/lists/getAll:
 *  get:
 *      summary: Return all Lists
 *      security:
 *          - bearerAuth: []
 *      tags: [Lists]
 *      responses:
 *          200:
 *              description: All lists
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/list'
 *                                
 */
router.get('/getAll', listController.getAll);

/**
 * @swagger
 * /api/lists/getByUserId/{id}:
 *  get:
 *      summary: Return all lists for a user
 *      security:
 *          - bearerAuth: []
 *      tags: [Lists]
 *      parameters:
 *          -   in: path
 *              name: id
 *              schema:
 *                  type: string
 *              required: true
 *              description: user id
 *      responses:
 *          200:
 *              description: all lists of a user
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/list'
 *          404:
 *              description: List not found
 *                                
 */
router.get('/getByUserId/:id', listController.getByUserId);


/**
 * @swagger
 * /api/lists/get/{id}:
 *  get:
 *      summary: Return List by id
 *      security:
 *          - bearerAuth: []
 *      tags: [Lists]
 *      parameters:
 *          -   in: path
 *              name: id
 *              schema:
 *                  type: string
 *              required: true
 *              description: List id
 *      responses:
 *          200:
 *              description: list with id
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/list'
 *          404:
 *              description: List not found
 *                                
 */
router.get('/get/:id', listController.get);

/**
 * @swagger
 * /api/lists/getByName/{name}:
 *  get:
 *      summary: Return List by Name
 *      security:
 *          - bearerAuth: []
 *      tags: [Lists]
 *      parameters:
 *          -   in: path
 *              name: name
 *              schema:
 *                  type: string
 *              required: true
 *              description: List Name
 *      responses:
 *          200:
 *              description: list with name
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/list'
 *          404:
 *              description: List not found
 *                                
 */
 router.get('/getByName/:name', listController.getByName);

/**
 * @swagger
 * /api/lists/update/{id}:
 *  put:
 *      summary: Updates list
 *      security:
 *          - bearerAuth: []
 *      tags: [Lists]
 *      parameters:
 *          -   in: path
 *              name: id
 *              schema:
 *                  type: string
 *              required: true
 *              description: List id
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/listToUpdate'
 *      responses:
 *          200:
 *              description: If operation was succesful
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/list'
 *          404:
 *              description: User not found
 *                                
 */
router.put('/update/:id', listController.update);

/**
 * @swagger
 * /api/lists/delete/{id}:
 *  delete:
 *      summary: Deletes a list by id
 *      security:
 *          - bearerAuth: []
 *      tags: [Lists]
 *      parameters:
 *          -   in: path
 *              name: id
 *              schema:
 *                  type: string
 *              required: true
 *              description: List id
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
router.delete('/delete/:id', listController.delete);

 /**
  * @swagger
  * components:
  *  schemas:
  *      list:
  *          type: object
  *          required:
  *              - name
  *          properties:
  *              id:
  *                  type: int
  *                  description: The auto-generated id of the user
  *              name:
  *                  type: string
  *                  description: List name
  *              description:
  *                  type: string
  *                  description: List Description
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
  *      listToCreate:
  *          type: object
  *          required:
  *              - name
  *          properties:
  *              name:
  *                  type: string
  *                  description: List name
  *              description:
  *                  type: string
  *                  description: List Description
 */

  /**
  * @swagger
  * components:
  *  schemas:
  *      listToUpdate:
  *          type: object
  *          required:
  *              - name
  *          properties:
  *              name:
  *                  type: string
  *                  description: List name
  *              description:
  *                  type: string
  *                  description: List Description
 */
module.exports = router;