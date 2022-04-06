const mongoose = require('mongoose');
const logger = require('../utils/logger');

mongoose.connect("mongodb://localhost:gnotesdb", ()=>{
        logger.info( colorText("SERVER DATABASE INFO: Connection has been established succesfully.") );
    }, (error) => {
        logger.info( colorText("SERVER DATABASE INFO: Unable to connect to the database: ", error) );
    }
)

module.exports = mongoose