// imports
const asyncHandler = require('express-async-handler');
const navLinks = require('../navLinks');
const newController = require('./newController')

const getIndexNoParams = asyncHandler(async(req, res) => {
    res.render("index", { navLinks: navLinks, messages: newController.messages });
})

const openMessage = asyncHandler(async(req, res) => {
    let correctMessage;
    for (let i = 0; i < newController.messages.length; i++) {
        if (newController.messages[i].id == req.body.messageId) {
            correctMessage = newController.messages[i];
            break;
        }
    }
    if (!correctMessage) {
        return next(new Error("Message not found")); // Pass error to Express error handler
    }
    res.render("message", { navLinks: navLinks, message: correctMessage });    
})

module.exports = { getIndexNoParams, openMessage }