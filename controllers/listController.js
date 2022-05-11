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

exports.createList = async (req, res) => {
    try {
        // Create a new list
        logger.debug( colorText("Creating new list") );

        const listCreated = {"listCreated":"some listCreated"};
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

        const lists = {"lists":"some lists"};

        res.json(lists);
    }catch(error){
        res.status(500).send(`There was an error getting list information: ${error}`);
    }
}

exports.getAllByUserId = async (req, res) => {
    try{
        // Get list from lists service
        logger.debug( colorText("Getting all lists for a user") );

        const lists = {"lists":"some lists"};

        res.json(lists);
    }catch(error){
        res.status(500).send(`There was an error getting list information: ${error}`);
    }
}

exports.getList = async (req, res) => {
    try{
        // Get list
        logger.debug( colorText("Getting list by id") );

        const list = {"list":"some list"};
        logger.info( colorText("List Found: "));
        
        res.json(list);
    }catch(error){
        res.status(500).send(`There was an error getting list information: ${error}`);
    }
}

exports.updateList = async (req, res) => {
    try{
      // Get list
      logger.debug( colorText("Update list information") );

      const result = {"result":"some result"};
      logger.info( colorText("List Updated: "));
        
      res.json(result);
  }catch(error){
      res.status(500).send(`There was an error updating list information: ${error}`);
  }
}

exports.deleteList = async (req, res) => {
    try{
      // Deleting list
      logger.debug( colorText("Deleting list") );

      const result = {"result":"some result"}
      logger.info( colorText("List Deleted: "));
        
      res.json(result);
  }catch(error){
      res.status(500).send(`There was an error deleting list: ${error}`);
  }
}