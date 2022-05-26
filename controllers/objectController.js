/**
 * @author Felipe Serna
 * @email damsog38@gmail.com
 * @create date 2022-03-29 22:45:10
 * @modify date 2022-04-8 22:45:39
 * @desc Lists Controller
 */

/************************************************************************************************
 *                                      Objects Controller
*************************************************************************************************/
const objectsService = require('../services/objectService');
const logger = require('../utils/logger');
const colorText = require('../utils/colortext');

exports.createObject = async (req, res) => {
    // Create a new user
    logger.debug( colorText(`Creating new object with options: ${JSON.stringify(req.body)}`) );

    options = {
            title: req.body.title,
            description: req.body.description,
            information: req.body.information,
            filters: req.body.filters,
            attachments: req.body.attachments,
            listId: req.body.listId
    };

    try {
        // Create a new object
        logger.debug( colorText("Creating new object") );

        const objectCreated = await objectsService.createObject(options);
        logger.info( colorText("Object created"));

        res.json(objectCreated);
    }catch(error) {
        res.status(500).send(`There was an error creating the object: ${error}`);
    }
}

exports.getAllObjects = async (req, res) => {
    try{
        // Get object from objects service
        logger.debug( colorText("Getting all objects") );

        const objects = await objectsService.getAllObjects();
        logger.info( colorText("Objects retrieved"));

        res.json(objects);
    }catch(error){
        res.status(500).send(`There was an error getting object information: ${error}`);
    }
}

exports.getAllByListId = async (req, res) => {
    try{
        // Get object from objects service
        logger.debug( colorText("Getting all objects for a List") );

        const objects = await objectsService.getAllByListId(req.params.id);
        logger.info( colorText("Objects retrieved"));

        res.json(objects);
    }catch(error){
        res.status(500).send(`There was an error getting object information: ${error}`);
    }
}

exports.getAllByListName = async (req, res) => {
    try{
        // Get object from objects service
        logger.debug( colorText("Getting all objects for a List") );

        const objects = await objectsService.getAllByListName(req.params.name, req.user.user_id);
        logger.info( colorText("Objects retrieved"));

        res.json(objects);
    }catch(error){
        res.status(500).send(`There was an error getting object information: ${error}`);
    }
}

exports.getAllByFilters = async (req, res) => {
    try{
        // Get object from objects service
        logger.debug( colorText("Getting all objects for a List given filter options") );

        const objects = {"objects":"some objects"};

        res.json(objects);
    }catch(error){
        res.status(500).send(`There was an error getting object information: ${error}`);
    }
}

exports.getObject = async (req, res) => {
    try{
        // Get object
        logger.debug( colorText("Getting object by id") );

        const object = await objectsService.getObject(req.params.id);
        logger.info( colorText(`Object Found: ${JSON.stringify(object)}`));
        
        res.json(object);
    }catch(error){
        res.status(500).send(`There was an error getting object information: ${error}`);
    }
}

exports.updateObject = async (req, res) => {
    // Update a List
    logger.debug( colorText(`Updating an Object with options: ${JSON.stringify(req.body)}`) );

    options = {
        title: req.body.title,
        description: req.body.description,
        information: req.body.information,
        filters: req.body.filters,
        attachments: req.body.attachments
    };

    try{
      // Get object
      logger.debug( colorText("Update object information") );

      const result = await objectsService.updateObject(options, req.params.id);
      logger.info( colorText(`Object Updated: ${req.params.id}`));
        
      res.json(result);
  }catch(error){
      res.status(500).send(`There was an error updating object information: ${error}`);
  }
}

exports.updateObjectFilters = async (req, res) => {
    try{
      // Get object
      logger.debug( colorText("Update object filters information") );

      const result = {"result":"some result"};
      logger.info( colorText("Object Updated: "));
        
      res.json(result);
  }catch(error){
      res.status(500).send(`There was an error updating object information: ${error}`);
  }
}

exports.deleteObject = async (req, res) => {
    try{
      // Deleting object
      logger.debug( colorText("Deleting object") );

      const result = await objectsService.deleteObject(req.params.id);
      logger.info( colorText(`Object deletion result: ${result}`));
        
      res.json(result);
  }catch(error){
      res.status(500).send(`There was an error deleting object: ${error}`);
  }
}