const User = require('../models/userModel');
const logger = require('../utils/logger');
const colorText = require('../utils/colortext');

exports.createUser = async (options) => {
    const operation = "Create User";
    logger.debug( colorText(`${operation} with options ${JSON.stringify(options)}`) );

    try{
        const newUser = await User.create(options);

        const result = {
            operation: operation,
            result: "success",
            message: "User created successfully",
            data: newUser
        }
        
        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
        return result;
    }catch (error) {
        const result = {
            operation: operation,
            result: "failed",
            message: error,
            data: ""
        }

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
        return result;
    }
}