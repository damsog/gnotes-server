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
router.post('/create', listController.createList);

/**
 * @swagger
 * /api/lists/getAllLists:
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
router.get('/getAllLists', listController.getAllLists);

/**
 * @swagger
 * /api/lists/getAllByUserId/{id}:
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
router.get('/getAllByUserId/:id', listController.getAllByUserId);


/**
 * @swagger
 * /api/lists/getList/{id}:
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
router.get('/getList/:id', listController.getList);

/**
 * @swagger
 * /api/lists/getListByName/{name}:
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
 router.get('/getListByName/:name', listController.getListByName);

/**
 * @swagger
 * /api/lists/updateList/{id}:
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
router.put('/updateList/:id', listController.updateList);

/**
 * @swagger
 * /api/lists/deleteList/{id}:
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
router.delete('/deleteList/:id', listController.deleteList);

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
  *              username:
  *                  type: string
  *                  description: List name
  *              description:
  *                  type: string
  *                  description: List Description
 */
module.exports = router;