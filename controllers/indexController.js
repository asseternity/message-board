// imports
const asyncHandler = require('express-async-handler');
const navLinks = require('../navLinks');
const newController = require('./newController');
const db = require('../db/queries')

const getIndexNoParams = asyncHandler(async(req, res) => {
    const dbMessages = await db.getAllMessages();
    res.render("index", { navLinks: navLinks, messages: dbMessages });
})

const openMessage = asyncHandler(async(req, res) => {
    const dbMessages = await db.getAllMessages();
    let correctMessage;

    for (let i = 0; i < dbMessages.length; i++) {
        if (req.body.messageId == dbMessages[i].id) {
            correctMessage = dbMessages[i];
            break;
        }
    }
    if (!correctMessage) {
        return next(new Error("Message not found")); // Pass error to Express error handler
    }
    res.render("message", { navLinks: navLinks, message: correctMessage });    
})

module.exports = { getIndexNoParams, openMessage }