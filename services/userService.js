const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const logger = require('../utils/logger');
const colorText = require('../utils/colortext');
const encryptorService = require('./encryptorService');

exports.createUser = async (options) => {
    const operation = "Create User";
    logger.debug( colorText(`${operation} with options ${JSON.stringify(options)}`) );

    const result = {
        operation: operation,
        result: "",
        message: "",
        data: ""
    }

    try{
        options.password = await encryptorService.encryptPassword(options.password);
        const newUser = await User.create(options);

        result.result = "success";
        result.message = "User created successfully";
        result.data = newUser
        
        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
        return result;
    }catch (error) {
        result.result = "failed";
        result.message = error.message;

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
        return result;
    }
}

exports.validateUser = async (username, password) => {
    const operation = "Login User";
    logger.debug( colorText(`${operation}`) );

    var result = {
        operation: operation,
        result: "failed",
        message: "",
        data: ""
    }

    try{
        if(!username || !password) { result.messsage = "Username and password must be provided"; return result };

        // Validates if user Exists
        const user = await User.findOne({username: username});
        if (!user) {result.message = "Username doesnt exist"; return result}

        // Matching password
        if( encryptorService.matchedPassword(password, user.password) ){
            logger.debug( colorText(`${operation} Password matched`) );

            // Creating an access token for the user
            const token = jwt.sign(
                {user_id: user._id, username},
                process.env.TOKEN_KEY,
                {expiresIn: "1h"}
            );
            logger.debug( colorText(`${operation} Token generated: ${token}`) );

            // Appends the token to the response | Weird casting from moongoose object to JSON
            var userJson = JSON.parse(JSON.stringify(user));
            userJson.token = `Bearer ${token}`;

            result.result = "success";
            result.message = "User logged successfully";
            result.data = userJson

            logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
            return result;
        }else{
            result.result = "failed";
            result.message = "Wrong credentials";
    
            logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
            return result;        
        }
    }catch (error) {
        result.result = "failed";
        result.message = error.message;

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
        return result;
    }
}

exports.getAllUsers = async () => {
    const operation = "Query All Users";
    logger.debug( colorText(`${operation}`) );

    var result = {
        operation: operation,
        result: "failed",
        message: "",
        data: ""
    }

    try {
        const users = await User.find({})

        result.result = "success";
        result.message = "List of users retrieved";
        result.data = users

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
        return result;
    }catch (error) {
        result.result = "failed";
        result.message = error.message;

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
        return result;
    }
}

exports.getUserById = async (id) => {
    const operation = `Query User by Id ${id}`;
    logger.debug( colorText(`${operation}`) );

    var result = {
        operation: operation,
        result: "failed",
        message: "",
        data: ""
    }

    try {
        const user = await User.findById(id)

        result.result = "success";
        result.message = "User retrieved";
        result.data = user

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
        return result;
    }catch (error) {
        result.result = "failed";
        result.message = error.message;

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
        return result;
    }
}

exports.getUserByUsername = async (username) => {
    const operation = `Query User by Username ${username}`;
    logger.debug( colorText(`${operation}`) );

    var result = {
        operation: operation,
        result: "failed",
        message: "",
        data: ""
    }

    try {
        const user = await User.find({username:`${username}`})

        result.result = "success";
        result.message = "User retrieved";
        result.data = user

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
        return result;
    }catch (error) {
        result.result = "failed";
        result.message = error.message;

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
        return result;
    }
}

exports.getUserByEmail = async (email) => {
    const operation = `Query User by Email ${email}`;
    logger.debug( colorText(`${operation}`) );

    var result = {
        operation: operation,
        result: "failed",
        message: "",
        data: ""
    }

    try {
        const user = await User.find({email:`${email}`})

        result.result = "success";
        result.message = "User retrieved";
        result.data = user

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
        return result;
    }catch (error) {
        result.result = "failed";
        result.message = error.message;

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
        return result;
    }
}