// imports
const express = require('express');
const indexController = require('../controllers/indexController')

// create route
const indexRoute = express.Router();

// route middleware
indexRoute.get('/', indexController.getIndexNoParams);
indexRoute.post('/message', indexController.openMessage);
indexRoute.post('/delete', indexController.deleteMessage);

// export
module.exports = indexRoute;