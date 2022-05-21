/**
 * @author Felipe Serna
 * @email damsog38@gmail.com
 * @create date 2022-03-29 22:45:10
 * @modify date 2022-04-8 22:45:39
 * @desc Lists Controller
 */

/************************************************************************************************
 *                                      Lists Controller
*************************************************************************************************/
const listsService = require('../services/listService');
const logger = require('../utils/logger');
const colorText = require('../utils/colortext');

exports.createList = async (req, res) => {
        // Create a new user
    logger.debug( colorText(`Creating new user with options: ${req.body}`) );
    
    options = {
        name : req.body.name,
        description : req.body.description
    };

    try {
        // Create a new list
        logger.debug( colorText("Creating new list") );

        const listCreated = await listsService.createList(options, req.user.user_id);
        logger.info( colorText("List created"));

        res.json(listCreated);
    }catch(error) {
        res.status(500).send(`There was an error creating the list: ${error}`);
    }
}

exports.getAllLists = async (req, res) => {
    try{
        // Get list from lists service
        logger.debug( colorText("Getting all lists") );

        const lists = await listsService.getAllLists();
        logger.info( colorText("Lists retrieved"));

        res.json(lists);
    }catch(error){
        res.status(500).send(`There was an error getting list information: ${error}`);
    }
}

exports.getAllByUserId = async (req, res) => {
    try{
        // Get list from lists service
        logger.debug( colorText("Getting all lists for a user") );

        const lists = await listsService.getAllByUserId(req.params.id);
        logger.info( colorText("Lists retrieved"));

        res.json(lists);
    }catch(error){
        res.status(500).send(`There was an error getting list information: ${error}`);
    }
}

exports.getList = async (req, res) => {
    try{
        // Get list
        logger.debug( colorText("Getting list by id") );

        const list = await listsService.getList(req.params.id);
        logger.info( colorText(`List Found: ${JSON.stringify(list)}`));
        
        res.json(list);
    }catch(error){
        res.status(500).send(`There was an error getting list information: ${error}`);
    }
}

exports.getListByName = async (req, res) => {
    try{
        // Get list
        logger.debug( colorText("Getting list by Name") );

        const list = await listsService.getListByName(req.params.name, req.user.user_id);
        logger.info( colorText(`List Found: ${JSON.stringify(list)}`));
        
        res.json(list);
    }catch(error){
        res.status(500).send(`There was an error getting list information: ${error}`);
    }
}

exports.updateList = async (req, res) => {
    // Update a List
    logger.debug( colorText(`Updating a List with options: ${req.body}`) );

    options = {
            name: req.body.name,
            description: req.body.description
    };

    try{
      // Get list
      logger.debug( colorText("Update list information") );

      const result = await listsService.updateList(options, req.params.id);
      logger.info( colorText(`List Updated: ${req.params.id}`));
        
      res.json(result);
  }catch(error){
      res.status(500).send(`There was an error updating list information: ${error}`);
  }
}

exports.deleteList = async (req, res) => {
    try{
      // Deleting list
      logger.debug( colorText("Deleting list") );

      const result = await listsService.deleteList(req.params.id);
      logger.info( colorText(`List Deleted: ${req.params.id}`));
        
      res.json(result);
  }catch(error){
      res.status(500).send(`There was an error deleting list: ${error}`);
  }
}