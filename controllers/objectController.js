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

exports.createObjectByListName = async (req, res) => {
    // Create a new user
    logger.debug( colorText(`Creating new object with options: ${JSON.stringify(req.body)}`) );

    options = {
            title: req.body.title,
            description: req.body.description,
            information: req.body.information,
            filters: req.body.filters,
            attachments: req.body.attachments,
            listName: req.body.listName
    };

    try {
        // Create a new object
        logger.debug( colorText("Creating new object") );

        const objectCreated = await objectsService.createObjectByListName(options, req.user.user_id);
        logger.info( colorText("Object created"));

        res.json(objectCreated);
    }catch(error) {
        res.status(500).send(`There was an error creating the object: ${error}`);
    }
}

exports.getAll = async (req, res) => {
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

exports.getByListId = async (req, res) => {
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

exports.getByListName = async (req, res) => {
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

exports.getByFilters = async (req, res) => {
    try{
        // Get object from objects service
        logger.debug( colorText("Getting all objects for a List given filter options") );

        const result = await objectsService.getByFilters(req.body.filters, req.params.listName, req.user.user_id);

        res.json(result);
    }catch(error){
        res.status(500).send(`There was an error getting object information: ${error}`);
    }
}

exports.get = async (req, res) => {
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

exports.getByName = async (req, res) => {
    try{
        // Get object
        logger.debug( colorText("Getting object by name") );

        const object = await objectsService.getObjectByName(req.params.objectName,req.params.listName,req.user.user_id);
        logger.info( colorText(`Object Found: ${JSON.stringify(object)}`));
        
        res.json(object);
    }catch(error){
        res.status(500).send(`There was an error getting object information: ${error}`);
    }
}

exports.update = async (req, res) => {
    // Update a List
    logger.debug( colorText(`Updating Object with options: ${JSON.stringify(req.body)}`) );

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

exports.updateByName = async (req, res) => {
    // Update a List
    logger.debug( colorText(`Updating Object with options: ${JSON.stringify(req.body)}`) );

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

      const result = await objectsService.updateByName(options, req.params.objectName, req.params.listName, req.user.user_id );
      logger.info( colorText(`Object Updated: ${req.params.id}`));
        
      res.json(result);
  }catch(error){
      res.status(500).send(`There was an error updating object information: ${error}`);
  }
}

exports.updateOptions = async (req, res) => {
    // Update a List
    logger.debug( colorText(`Updating Object Options for : ${JSON.stringify(req.body)}`) );

    options = {
        filters: req.body.filters,
        attachments: req.body.attachments
    };

    try{
      // Get object
      logger.debug( colorText("Update object options") );

      const result = await objectsService.updateObjectOptions(options, req.params.id);
      logger.info( colorText(`Object Updated: ${req.params.id}`));
        
      res.json(result);
  }catch(error){
      res.status(500).send(`There was an error updating object options: ${error}`);
  }
}

exports.updateOptionsByName = async (req, res) => {
    // Update a List
    logger.debug( colorText(`Updating Object Options for : ${JSON.stringify(req.body)}`) );

    options = {
        filters: req.body.filters,
        attachments: req.body.attachments
    };

    try{
      // Get object
      logger.debug( colorText("Update object options") );

      const result = await objectsService.updateOptionsByName(options, req.params.objectName, req.params.listName, req.user.user_id );
      logger.info( colorText(`Object Updated: ${req.params.id}`));
        
      res.json(result);
  }catch(error){
      res.status(500).send(`There was an error updating object options: ${error}`);
  }
}

exports.removeOptions = async (req, res) => {
    // Update a List
    logger.debug( colorText(`Removing Object Options for : ${JSON.stringify(req.body)}`) );

    options = {
        filters: req.body.filters,
        attachments: req.body.attachments
    };

    try{
      // Get object
      logger.debug( colorText("Remove object options") );

      const result = await objectsService.removeObjectOptions(options, req.params.id);
      logger.info( colorText(`Object Updated: ${req.params.id}`));
        
      res.json(result);
  }catch(error){
      res.status(500).send(`There was an error updating object options: ${error}`);
  }
}

exports.removeOptionsByName = async (req, res) => {
    // Update a List
    logger.debug( colorText(`Removing Object Options for : ${JSON.stringify(req.body)}`) );

    options = {
        filters: req.body.filters,
        attachments: req.body.attachments
    };

    try{
      // Get object
      logger.debug( colorText("Remove object options") );

      const result = await objectsService.removeObjectOptionsByName( options, req.params.objectName, req.params.listName, req.user.user_id );
      logger.info( colorText(`Object Updated: ${req.params.id}`));
        
      res.json(result);
  }catch(error){
      res.status(500).send(`There was an error updating object options: ${error}`);
  }
}

exports.delete = async (req, res) => {
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

exports.deleteByName = async (req, res) => {
    try{
      // Deleting object
      logger.debug( colorText("Deleting object") );

      const result = await objectsService.deleteByName(req.params.objectName, req.params.listName, req.user.user_id );
      logger.info( colorText(`Object deletion result: ${result}`));
        
      res.json(result);
  }catch(error){
      res.status(500).send(`There was an error deleting object: ${error}`);
  }
}