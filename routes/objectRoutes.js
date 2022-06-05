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
 * /api/objects/createByListName:
 *  post:
 *      summary: Create a new Object
 *      tags: [Objects]
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/objectToCreateByListName'
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
 router.post('/createByListName' , objectController.createObjectByListName );

/**
 * @swagger
 * /api/objects/getAll:
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
router.get('/getAll' , objectController.getAll );

/**
 * @swagger
 * /api/objects/getByListId/{id}:
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
router.get('/getByListId/:id' , objectController.getByListId );

/**
 * @swagger
 * /api/objects/getByListName/{name}:
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
router.get('/getByListName/:name' , objectController.getByListName );

/**
 * @swagger
 * /api/objects/getByFilters:
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
router.get('/getByFilters' , objectController.getByFilters );

/**
 * @swagger
 * /api/objects/get/{id}:
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
router.get('/get/:id' , objectController.get );

/**
 * @swagger
 * /api/objects/getByName/{objectName}/{listName}:
 *  get:
 *      summary: Return Object by id
 *      security:
 *          - bearerAuth: []
 *      tags: [Objects]
 *      parameters:
 *          -   in: path
 *              name: objectName
 *              schema:
 *                  type: string
 *              required: true
 *              description: Object name
 *          -   in: path
 *              name: listName
 *              schema:
 *                  type: string
 *              required: true
 *              description: List name
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
 router.get('/getByName/:objectName/:listName' , objectController.getByName );

/**
 * @swagger
 * /api/objects/update/{id}:
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
router.put('/update/:id' , objectController.update );

/**
 * @swagger
 * /api/objects/updateOptions/{id}:
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
 *                      $ref: '#/components/schemas/objectToUpdateObjects'
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
router.put('/updateOptions/:id' , objectController.updateOptions );

/**
 * @swagger
 * /api/objects/removeOptions/{id}:
 *  delete:
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
 *                      $ref: '#/components/schemas/objectToUpdateObjects'
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
 router.delete('/removeOptions/:id' , objectController.removeOptions );

/**
 * @swagger
 * /api/objects/delete/{id}:
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
router.delete('/delete/:id' , objectController.delete );

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
  *              attachments:
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
  *              title:
  *                  type: string
  *                  description: Object name
  *              description:
  *                  type: string
  *                  description: Object Description
  *              information:
  *                  type: string
  *                  description: Object Information
  *              filters:
  *                  type: string
  *                  description: Object Filters.
  *              attachments:
  *                  type: string
  *                  description: Object attachments.
  *              listId:
  *                  type: string
  *                  description: The auto-generated id of the user
 */

 /**
  * @swagger
  * components:
  *  schemas:
  *      objectToCreateByListName:
  *          type: object
  *          required:
  *              - name
  *          properties:
  *              title:
  *                  type: string
  *                  description: Object name
  *              description:
  *                  type: string
  *                  description: Object Description
  *              information:
  *                  type: string
  *                  description: Object Information
  *              filters:
  *                  type: string
  *                  description: Object Filters. 
  *              attachments:
  *                  type: string
  *                  description: Object attachments.
  *              listName:
  *                  type: string
  *                  description: List name
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
  *                  description: Object name
  *              description:
  *                  type: string
  *                  description: Object Description
  *              information:
  *                  type: string
  *                  description: Object Information
  *              filters:
  *                  type: string
  *                  description: Object Filters.
  *              attachments:
  *                  type: string
  *                  description: Object attachments.
*/

 /**
  * @swagger
  * components:
  *  schemas:
  *      objectToUpdateObjects:
  *          type: object
  *          properties:
  *              filters:
  *                  type: string
  *                  description: Object Filters.
  *              attachments:
  *                  type: string
  *                  description: Object attachments.
*/

module.exports = router;