// imports
const asyncHandler = require('express-async-handler');
const navLinks = require('../navLinks');
const db = require('../db/queries')

const getNewNoParams = asyncHandler(async(req, res) => {
    res.render("new", { navLinks: navLinks });
})

const newPost = asyncHandler(async(req, res) => {
    let messageAuthor = req.body.from;
    let messageText = req.body.message;
    let messageAdded = new Date();
    // let messageId = messages.length;
    await db.newMessage(messageText, messageAuthor, messageAdded);
    // messages.push({ text: messageText, user: messageAuthor, added: messageAdded, id: messageId });
    res.redirect('/');
});

module.exports = { getNewNoParams, newPost }