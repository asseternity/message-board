// imports
const express = require('express');
const indexController = require('../controllers/indexController')

// create route
const indexRoute = express.Router();

// route middleware
indexRoute.get('/', indexController.getIndexNoParams);

// export
module.exports = indexRoute;