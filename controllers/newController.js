// imports
const asyncHandler = require('express-async-handler');
const navLinks = require('../navLinks');

// sample messages
const messages = [
    {
        text: "Hi there!",
        user: "Aigul",
        added: new Date(),
        id: 0
    },
    {
        text: "Hello there!",
        user: "Dauren",
        added: new Date(),
        id: 1
    }
];

const getNewNoParams = asyncHandler(async(req, res) => {
    res.render("new", { navLinks: navLinks });
})

const newPost = asyncHandler(async(req, res) => {
    let messageAuthor = req.body.from;
    let messageText = req.body.message;
    let messageAdded = new Date();
    let messageId = messages.length;
    messages.push({ text: messageText, user: messageAuthor, added: messageAdded, id: messageId });
    res.redirect('/');
});

module.exports = { getNewNoParams, newPost, messages }