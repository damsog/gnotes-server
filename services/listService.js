const List = require('../models/listModel');
const logger = require('../utils/logger');
const colorText = require('../utils/colortext');

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
        return result;
    }catch(e) {
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
        return result;
    }catch(e) {
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
    }catch(e) {
        result.result = "failed";
        result.message = error.message;

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
    }
}

exports.createList = async () => {
    const operation = "Create List";
    logger.debug( colorText(`${operation}`) );
    
    var result = resultStructure(operation);

    try {
        return result;
    }catch(e) {
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
    }catch(e) {
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
    }catch(e) {
        result.result = "failed";
        result.message = error.message;

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
    }
}
