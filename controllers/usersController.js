const usersService = require('../services/usersService');
const logger = require('../utils/logger');

exports.getAllUsers = async (req, res) => {
    try{
        // Get user from users service
        const users = {"users":"some users"}

        res.json(users);
    }catch(e){
        res.status(500).send("There was an error getting user information");
    }
}