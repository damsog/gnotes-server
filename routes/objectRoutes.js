const express = require('express');
const router = express.Router();
const objectController = require('../controllers/objectController');

/**
 * @swagger
 * /api/objects/create:
 *  post:
 *      summary: Create a new Object
 *      tags: [Objects]
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/objectToCreate'
 *      responses:
 *          200:
 *              description: Object created
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/object'
 *                                
 */
router.post('/create' , objectController.createObject );

/**
 * @swagger
 * /api/objects/getAllObjects:
 *  get:
 *      summary: Return all Ojects
 *      security:
 *          - bearerAuth: []
 *      tags: [Objects]
 *      responses:
 *          200:
 *              description: All lists
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/object'
 *                                
 */
router.get('/getAllObjects' , objectController.getAllObjects );

/**
 * @swagger
 * /api/objects/getAllByListId/{id}:
 *  get:
 *      summary: Return all objects for a list
 *      security:
 *          - bearerAuth: []
 *      tags: [Objects]
 *      parameters:
 *          -   in: path
 *              name: id
 *              schema:
 *                  type: string
 *              required: true
 *              description: list id
 *      responses:
 *          200:
 *              description: all objects for a list
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/object'
 *          404:
 *              description: Object not found
 *                                
 */
router.get('/getAllByListId/:id' , objectController.getAllByListId );

/**
 * @swagger
 * /api/objects/getAllByListName/{name}:
 *  get:
 *      summary: Return all objects for a named list
 *      security:
 *          - bearerAuth: []
 *      tags: [Objects]
 *      parameters:
 *          -   in: path
 *              name: name
 *              schema:
 *                  type: string
 *              required: true
 *              description: list name
 *      responses:
 *          200:
 *              description: all objects for a list
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/object'
 *          404:
 *              description: Object not found
 *                                
 */
router.get('/getAllByListName/:name' , objectController.getAllByListName );

/**
 * @swagger
 * /api/object/getAllByFilters:
 *  get:
 *      summary: Get Objects by filters
 *      tags: [Objects]
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      filters:
 *                          type: object
 *                          properties:
 *                              thing:
 *                                  type: int
 *      responses:
 *          200:
 *              description: all objects for a list
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/object'
 *          404:
 *              description: Object not found
 *                                
 */
router.get('/getAllByFilters' , objectController.getAllByFilters );

/**
 * @swagger
 * /api/object/getObject/{id}:
 *  get:
 *      summary: Return Object by id
 *      security:
 *          - bearerAuth: []
 *      tags: [Objects]
 *      parameters:
 *          -   in: path
 *              name: id
 *              schema:
 *                  type: string
 *              required: true
 *              description: Object id
 *      responses:
 *          200:
 *              description: Object with id
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/object'
 *          404:
 *              description: Object not found
 *                                
 */
router.get('/getObject/:id' , objectController.getObject );

/**
 * @swagger
 * /api/object/updateObject/{id}:
 *  put:
 *      summary: Updates Object
 *      security:
 *          - bearerAuth: []
 *      tags: [Objects]
 *      parameters:
 *          -   in: path
 *              name: id
 *              schema:
 *                  type: string
 *              required: true
 *              description: Object id
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/objectToUpdate'
 *      responses:
 *          200:
 *              description: Updated object if operation was succesful
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/object'
 *          404:
 *              description: Object not found
 *                                
 */
router.put('/updateObject/:id' , objectController.updateObject );
router.put('/updateObjectFilters' , objectController.updateObjectFilters );

/**
 * @swagger
 * /api/objects/deleteObject/{id}:
 *  delete:
 *      summary: Deletes an object by id
 *      security:
 *          - bearerAuth: []
 *      tags: [Objects]
 *      parameters:
 *          -   in: path
 *              name: id
 *              schema:
 *                  type: string
 *              required: true
 *              description: Object id
 *      responses:
 *          200:
 *              description: If operation was succesful
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *          404:
 *              description: Object not found
 *                                
 */
router.delete('/deleteObject/:id' , objectController.deleteObject );

 /**
  * @swagger
  * components:
  *  schemas:
  *      object:
  *          type: object
  *          required:
  *              - name
  *          properties:
  *              id:
  *                  type: int
  *                  description: The auto-generated id of the user
  *              title:
  *                  type: string
  *                  description: List name
  *              description:
  *                  type: string
  *                  description: List Description
  *              information:
  *                  type: string
  *                  description: List Description
  *              filters:
  *                  type: object
  *                  items:
  *                      type: string
  *              attachment:
  *                  type: object
  *                  items:
  *                      type: string
  *              createdAt:
  *                  type: string
  *                  description: time
  *              updatedAt:
  *                  type: string
  *                  description: time
  *              listId:
  *                  type: int
  *                  description: The auto-generated id of the user
 */
 
 /**
  * @swagger
  * components:
  *  schemas:
  *      objectToCreate:
  *          type: object
  *          required:
  *              - name
  *          properties:
  *              id:
  *                  type: int
  *                  description: The auto-generated id of the user
  *              title:
  *                  type: string
  *                  description: List name
  *              description:
  *                  type: string
  *                  description: List Description
  *              information:
  *                  type: string
  *                  description: List Description
  *              filters:
  *                  type: object
  *                  items:
  *                      type: string
  *              attachment:
  *                  type: object
  *                  items:
  *                      type: string
  *              listId:
  *                  type: int
  *                  description: The auto-generated id of the user
 */

 /**
  * @swagger
  * components:
  *  schemas:
  *      objectToUpdate:
  *          type: object
  *          required:
  *              - name
  *          properties:
  *              title:
  *                  type: string
  *                  description: List name
  *              description:
  *                  type: string
  *                  description: List Description
  *              information:
  *                  type: string
  *                  description: List Description
  *              filters:
  *                  type: object
  *                  items:
  *                      type: string
  *              attachment:
  *                  type: object
  *                  items:
  *                      type: string
*/

module.exports = router;