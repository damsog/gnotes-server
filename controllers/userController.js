/**
 * @author Felipe Serna
 * @email damsog38@gmail.com
 * @create date 2022-03-29 22:45:10
 * @modify date 2022-04-8 22:45:39
 * @desc Users Controller
 */

/************************************************************************************************
 *                                      Users Controller
*************************************************************************************************/
const userService = require('../services/userService');
const logger = require('../utils/logger');
const colorText = require('../utils/colortext');

exports.create = async (req, res) => {
    // Create a new user
    logger.debug( colorText(`Creating new user with options: ${req.body}`) );

    options = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
    };

    try {

        const result = await userService.createUser( options );
        logger.info( colorText("User created"));

        res.json(result);
    }catch(error) {
        res.status(500).send(`There was an error creating the user: ${error}`);
    }
}

exports.getAll = async (req, res) => {
    try{
        // Get user from users service
        logger.debug( colorText("Getting all users") );

        const result = await userService.getAllUsers();
        logger.info( colorText("List of users retrieved"));

        res.json(result);
    }catch(error){
        res.status(500).send(`There was an error getting user information: ${error}`);
    }
}

exports.getById = async (req, res) => {
    try{
        // Get user
        logger.debug( colorText(`Getting user by id ${req.params.id}`) );

        const result = await userService.getUserById(req.params.id);
        logger.info( colorText(`User Found: ${result.data.id}`));
        
        res.json(result);
    }catch(error){
        res.status(500).send(`There was an error getting user information: ${error}`);
    }
}

exports.getByUsername = async (req, res) => {
    try{
        // Get user
        logger.debug( colorText(`Getting user by username ${req.params.username}`) );

        const result = await userService.getUserByUsername(req.params.username);
        logger.info( colorText(`User Found: ${result.data.username}`));
        
        res.json(result);
    }catch(error){
        res.status(500).send(`There was an error getting user information: ${error}`);
    }
}

exports.getByEmail = async (req, res) => {
    try{
        // Get user
        logger.debug( colorText(`Getting user by Email ${req.params.email}`) );

        const result = await userService.getUserByEmail(req.params.email);
        logger.info( colorText(`User Found: ${result.data.email}`));
        
        res.json(result);
    }catch(error){
        res.status(500).send(`There was an error getting user information: ${error}`);
    }
}

exports.update = async (req, res) => {
    // Update a User
    logger.debug( colorText(`Updating a user with options: ${req.body}`) );

    options = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
    };

    try{
      // Get user
      logger.debug( colorText("Update user information") );

      const result = await userService.updateUser(options,req.params.id);
      logger.info( colorText("User Updated: "));
        
      res.json(result);
  }catch(error){
      res.status(500).send(`There was an error updating user information: ${error}`);
  }
}

exports.delete = async (req, res) => {
    try{
        // Get user
        logger.debug( colorText(`Deleting user by id ${req.params.id}`) );

        const result = await userService.deleteUser(req.params.id);
        logger.info( colorText(`${result}`));
        
        res.json(result);
    }catch(error){
        res.status(500).send(`There was an error getting user information: ${error}`);
    }
}

exports.validateUser = async (req, res) => {
    try{
        // Deleting user
        logger.debug( colorText("Validating user information") );

        const result = await userService.validateUser(req.body.username, req.body.password);
        logger.info( colorText("Validation Result: "));
          
        res.json(result);
    }catch(error){
        res.status(500).send(`There was an error validating user: ${error}`);
    }
}

