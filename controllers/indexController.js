// imports
const asyncHandler = require('express-async-handler');

const getIndexNoParams = asyncHandler(async(req, res) => {
    res.send(`This is the index page`);
})

module.exports = { getIndexNoParams }