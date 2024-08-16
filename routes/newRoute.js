// imports
const express = require('express');
const newController = require('../controllers/newController')

// create route
const newRoute = express.Router();

// route middleware
newRoute.get('/', newController.getNewNoParams);

// export
module.exports = newRoute;