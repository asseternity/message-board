// imports
const asyncHandler = require('express-async-handler');
const navLinks = require('../navLinks');

const getIndexNoParams = asyncHandler(async(req, res) => {
    res.render("index", { navLinks: navLinks });
})

module.exports = { getIndexNoParams }