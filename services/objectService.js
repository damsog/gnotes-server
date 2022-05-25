const Object = require('../models/objectModel');
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

exports.createObject = async (options) => {
    const operation = "Create Object";
    logger.debug( colorText(`${operation}`) );
    
    var result = resultStructure(operation);

    try {
        // Checking if the object exists for the list
        //const query = await Object.aggregate([
        //    { $lookup: { 
        //        from: "lists", 
        //        localField: "lists", 
        //        foreignField: "_id", 
        //        as: "lists",
        //        pipeline: [{ 
        //            $match:{"_id":options.listId} 
        //        }]  
        //    } }, 
        //    { $match:{"lists._id": options.listsId } }
        //]);

        // TODO: Validations

        // Create a new object
        logger.debug( colorText("Creating new object") );

        const object = await Object.create(options);

        result.result = "success";
        result.message = "Object Created";
        result.data = object

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
        return result;
    }catch(error) {
        result.result = "failed";
        result.message = error.message;

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
    }
}

exports.getAllObjects = async () => {
    const operation = "Query All Objects";
    logger.debug( colorText(`${operation}`) );
    
    var result = resultStructure(operation);

    try{
        // Get object from objects service
        logger.debug( colorText("Getting all objects") );

        const objects = "nothing"

        result.result = "success";
        result.message = "List retrieved";
        result.data = objects

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
        return result;
    }catch(error){
        result.result = "failed";
        result.message = error.message;

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
    }
}

exports.getAllObjectsByListId = async (id) => {
    const operation = `Query Objects for list ${id}`;
    logger.debug( colorText(`${operation}`) );
    
    var result = resultStructure(operation);

    try{
        // Get object from objects service
        logger.debug( colorText("Getting all objects for a List") );

        const objects = "nothing"

        result.result = "success";
        result.message = "Objects retrieved";
        result.data = objects

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
        return result;
    }catch(error){
        result.result = "failed";
        result.message = error.message;

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
    }
}

exports.getAllObjectsByListName = async (name, userId) => {
    const operation = `Query Objects for list ${name} user ${userId}`;
    logger.debug( colorText(`${operation}`) );
    
    var result = resultStructure(operation);

    try{
        // Get object from objects service
        logger.debug( colorText("Getting all objects for a List") );

        const objects = "nothing"

        result.result = "success";
        result.message = "List retrieved";
        result.data = objects

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
        return result;
    }catch(error){
        result.result = "failed";
        result.message = error.message;

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
    }
}

exports.getAllObjectsByFilters = async (options) => {
    const operation = `Query Objects with options ${options}`;
    logger.debug( colorText(`${operation}`) );
    
    var result = resultStructure(operation);

    try{
        // Get object from objects service
        logger.debug( colorText("Getting all objects for a List given filter options") );

        const objects = "nothing"

        result.result = "success";
        result.message = "List retrieved";
        result.data = objects

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
        return result;
    }catch(error){
        result.result = "failed";
        result.message = error.message;

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
    }
}

exports.getObject = async (id) => {
    const operation = `Query Object ${id}`;
    logger.debug( colorText(`${operation}`) );
    
    var result = resultStructure(operation);

    try{
        // Get object
        logger.debug( colorText("Getting object by id") );

        const object = "nothing"

        result.result = "success";
        result.message = "List retrieved";
        result.data = object

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
        return result;
    }catch(error){
        result.result = "failed";
        result.message = error.message;

        logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
    }
}

exports.updateObject = async (id) => {
    const operation = `Update object ${id}`;
    logger.debug( colorText(`${operation}`) );
    
    var result = resultStructure(operation);

    try{
      // Get object
      logger.debug( colorText("Update object information") );

      const object = "nothing"

      result.result = "success";
      result.message = "List retrieved";
      result.data = object

      logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
      return result;
  }catch(error){
    result.result = "failed";
    result.message = error.message;

    logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
  }
}

exports.updateObjectFilters = async (options) => {
    const operation = `Update Object with options ${options}`;
    logger.debug( colorText(`${operation}`) );
    
    var result = resultStructure(operation);

    try{
      // Get object
      logger.debug( colorText("Update object filters information") );

      const object = "nothing"

      result.result = "success";
      result.message = "List retrieved";
      result.data = object

      logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
      return result;
  }catch(error){
    result.result = "failed";
    result.message = error.message;

    logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
  }
}

exports.deleteObject = async (id) => {
    const operation = `Query List ${id}`;
    logger.debug( colorText(`${operation}`) );
    
    var result = resultStructure(operation);

    try{
      // Deleting object
      logger.debug( colorText("Deleting object") );

      result.result = "success";
      result.message = "List retrieved";
      result.data = id

      logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
      return result;
  }catch(error){
    result.result = "failed";
    result.message = error.message;

    logger.debug( colorText(`${operation} ${JSON.stringify(result)}`) );
  }
}