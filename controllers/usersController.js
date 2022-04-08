const usersService = require('../services/usersService');
const logger = require('../utils/logger');

exports.createUser = async (req, res) => {
    try {
        // Create a new user
        logger.debug( colorText("Creating new user") );

        const userCreated = {"userCreated":"some userCreated"};
        logger.info( colorText("User created"));

        res.json(userCreated);
    }catch(error) {
        res.status(500).send(`There was an error creating the user: ${error}`);
    }
}

exports.getAllUsers = async (req, res) => {
    try{
        // Get user from users service
        logger.debug( colorText("Getting all users") );

        const users = {"users":"some users"};

        res.json(users);
    }catch(error){
        res.status(500).send(`There was an error getting user information: ${error}`);
    }
}

exports.getUserById = async (req, res) => {
    try{
        // Get user
        logger.debug( colorText("Getting user by id") );

        const user = {"user":"some user"};
        logger.info( colorText("User Found: "));
        
        res.json(user);
    }catch(error){
        res.status(500).send(`There was an error getting user information: ${error}`);
    }
}

exports.getUserByUsername = async (req, res) => {
    try{
        // Get user
        logger.debug( colorText("Getting user by username") );
        
        const user = {"user":"some user"};
        logger.info( colorText("User Found: "));
        
        res.json(user);
    }catch(error){
        res.status(500).send(`There was an error getting user information: ${error}`);
    }
}

exports.getUserByEmail = async (req, res) => {
    try{
        // Get user
        logger.debug( colorText("Getting user by email") );

        const user = {"user":"some user"};
        logger.info( colorText("User Found: "));
        
        res.json(user);
    }catch(error){
        res.status(500).send(`There was an error getting user information: ${error}`);
    }
}

exports.updateUser = async (req, res) => {
    try{
      // Get user
      logger.debug( colorText("Update user information") );

      const result = {"result":"some result"};
      logger.info( colorText("User Updated: "));
        
      res.json(result);
  }catch(error){
      res.status(500).send(`There was an error updating user information: ${error}`);
  }
}

exports.deleteUser = async (req, res) => {
    try{
      // Deleting user
      logger.debug( colorText("Deleting user") );

      const result = {"result":"some result"}
      logger.info( colorText("User Deleted: "));
        
      res.json(result);
  }catch(error){
      res.status(500).send(`There was an error deleting user: ${error}`);
  }
}

exports.validateUser = async (req, res) => {
    try{
        // Deleting user
        logger.debug( colorText("Validating user information") );

        const result = {"result":"some result"};
        logger.info( colorText("Validation Result: "));
          
        res.json(result);
    }catch(error){
        res.status(500).send(`There was an error validating user: ${error}`);
    }
}


