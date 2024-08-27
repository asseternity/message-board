// imports
const express = require('express');
const indexController = require('../controllers/indexController')

// create route
const indexRoute = express.Router();

// route middleware
indexRoute.get('/', indexController.getIndexNoParams);
indexRoute.post('/message', indexController.openMessage);

// export
module.exports = indexRoute;