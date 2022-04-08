const mongoose = require('mongoose');
const logger = require('../utils/logger');
const colorText = require('../utils/colortext');

mongoose.connect(`mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_NAME}`, ()=>{
        logger.info( colorText("SERVER DATABASE INFO: Connection has been established succesfully.") );
    }, (error) => {
        logger.info( colorText("SERVER DATABASE INFO: Unable to connect to the database: ", error) );
    }
)

module.exports = mongoose