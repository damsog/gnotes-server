const mongoose = require('mongoose');
const logger = require('../utils/logger');
const colorText = require('../utils/colortext');

let db_username = process.env.DATABASE_USERNAME;
let db_password = process.env.DATABASE_PASSWORD;
let access_url = `mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;

// For remote access
if((db_username && db_username!==undefined ) && (db_password && db_password!==undefined )){ 
    logger.debug(colorText(`Database username: ${db_username} Database password: ${db_password}`));
    access_url = `mongodb://${db_username}:${db_password}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}?authSource=admin`;
};

mongoose.connect(access_url, ()=>{
    logger.debug(colorText(`Attempting to connect to ${access_url}`));
    logger.info( colorText("SERVER DATABASE INFO: Connection has been established succesfully.") );
    }, (error) => {
        logger.info( colorText("SERVER DATABASE INFO: Unable to connect to the database: ", error) );
    }
)

module.exports = mongoose