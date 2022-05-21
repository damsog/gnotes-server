const List = require('../models/listModel');
const User = require('../models/userModel');
const logger = require('../utils/logger');
const colorText = require('../utils/colortext');
const { ObjectId } = require('mongoose').Types;

resultStructure = (operation) => { 
    return result = {
        operation: operation,
        result: "failed",
        message: "",
        data: ""
    }
}

exports.getList = async (id) => {
    const operation = `Query List ${id}`;
    logger.debug( colorText(`${operation}`) );
    
    var result = resultStructure(operation);

    try {
        // Queries for the list
        const list = await List.findById(id);

        result.result = "success";
        result.message = "List retrieved";
        result.data = list

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
        return result;
    }catch(error) {
        result.result = "failed";
        result.message = error.message;

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
    }
}

exports.getAllLists = async () => {
    const operation = "Query All Lists";
    logger.debug( colorText(`${operation}`) );
    
    var result = resultStructure(operation);

    try {
        // Getting all users
        const lists = await List.find({});

        result.result = "success";
        result.message = "List of users retrieved";
        result.data = lists

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
        return result;
    }catch(error) {
        result.result = "failed";
        result.message = error.message;

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
    }
}

exports.getAllByUserId = async (id) => {
    const operation = `Query All Lists for user ${id}`;
    logger.debug( colorText(`${operation}`) );
    
    var result = resultStructure(operation);

    try {
        return result;
    }catch(error) {
        result.result = "failed";
        result.message = error.message;

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
    }
}

exports.createList = async (options, userId) => {
    const operation = "Create List";
    logger.debug( colorText(`${operation}`) );
    
    var result = resultStructure(operation);

    try {
        // Validates if the list for user exists
        logger.debug( colorText(`Looking for list: ${options.name} for user ${userId}`) );
        const query = await User.aggregate([
            { $match:{"_id": ObjectId(userId) } },
            { $lookup: { 
                from: "lists", 
                localField: "lists", 
                foreignField: "_id", 
                as: "lists",
                pipeline: [{ 
                    $match:{"name":options.name} 
                }]  
            } }, 
            { $project:{"lists":1} } 
        ]);
        logger.debug( colorText(`${operation} ${JSON.stringify(query[0].lists)}`) );
        if(query[0].lists.length > 0) { result.messsage = `The user already has a list named ${options.name}`; return result };

        // If the list is new creates the list
        const newList = await List.create(options);

        // Updating the user which owns the list
        const user = await User.findById(userId);
        user.lists.push(newList._id);
        user.save();

        result.result = "success";
        result.message = "List created successfully";
        result.data = {newList : newList, userId : userId};
        
        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
        return result;
    }catch(error) {
        result.result = "failed";
        result.message = error.message;

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
    }
}

exports.updateList = async (id) => {
    const operation = `Update List ${id}`;
    logger.debug( colorText(`${operation}`) );
    
    var result = resultStructure(operation);

    try {
        return result;
    }catch(error) {
        result.result = "failed";
        result.message = error.message;

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
    }
}

exports.deleteList = async (id) => {
    const operation = `Delete List ${id}`;
    logger.debug( colorText(`${operation}`) );
    
    var result = resultStructure(operation);

    try {
        return result;
    }catch(error) {
        result.result = "failed";
        result.message = error.message;

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
    }
}
