// imports
const asyncHandler = require('express-async-handler');
const navLinks = require('../navLinks');

const getNewNoParams = asyncHandler(async(req, res) => {
    res.render("new", { navLinks: navLinks });
})

module.exports = { getNewNoParams }