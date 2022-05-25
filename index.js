/**
 * @author Felipe Serna
 * @email damsog38@gmail.com
 * @create date 2022-03-29 22:45:10
 * @modify date 2022-03-29 22:45:39
 * @desc Backend for a platform to create and store notes and lists
 */

/************************************************************************************************
 *                                             Dependencies
*************************************************************************************************/
// Configuration constants
require('dotenv').config()

// Basic Express dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

// Logging dependencies
const logger = require('./utils/logger');
const customMorgan = require('./utils/customMorgan');
const figlet = require('figlet');
const colorText = require('./utils/colortext');
const gradient = require('gradient-string');

// Documentation Dependencies
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Database | Just importing it triggers the connection
const mongoose = require('./models/db');

//  Security 
const authService = require('./services/authenticationService');

/************************************************************************************************
 *                                           Configurations
*************************************************************************************************/

// Swagger Documentation confifguration
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'Platform API',
            version: "1.0.0",
            description: 'Videoanalytics platform API'
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT}`
           }
        ],
        components: {
            securitySchemes: {
                bearerAuth:{
                    type: "http",
                    scheme: "bearer",
                    in: "header",
                    bearerFormat: "JWT"
                },
            }
        },
        security: [ { bearerAuth: [] } ],
    },
    apis: ["./routes/*.js"],
}

// Figlet Configuration. To display a cool title for the Server.
const figletParamsTitle = {
    font: "Isometric2",
    horizontalLayout: 'full',
    verticalLayout: 'full',
    width: 100,
    whitespaceBreak: false
}
const figletParamsSubtitle = {
    font: "Alligator2",
    horizontalLayout: 'fitted',
    verticalLayout: 'fitted',
    width: 200,
    whitespaceBreak: true
}

// Swagger Documentation initialization
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Setting the server
const app = express();
app.set('port', process.env.PORT || 4000);
app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs) );

// Muddlewares
app.use(cors());
app.use(customMorgan);
app.use(express.urlencoded({ extended: false}));
app.use(express.json({limit: '50mb'}));

// Routes
app.use('/api/access', require('./routes/accessRoutes'));
app.use('/api/users', authService, require('./routes/userRoutes'));
app.use('/api/lists', authService, require('./routes/listRoutes'));
app.use('/api/objects', authService, require('./routes/objectRoutes'));

// Fronend

// Starting the server
app.listen(app.get('port'), ()=>{
    // Sick title
    console.log(
        gradient.retro(
            figlet.textSync("Gnotes", figletParamsTitle)
        )  
    );
    console.log(
        gradient.retro(
            figlet.textSync("NOTES SERVER", figletParamsSubtitle)
        )
    );
    logger.info( colorText(`SERVER CONFIGURATION INFO: Server Running on: ${process.env.SERVER}`) );
    logger.info( colorText(`SERVER CONFIGURATION INFO: Server Running on Port: ${process.env.PORT}`) );
});