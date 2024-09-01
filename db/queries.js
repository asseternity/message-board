const pool = require('./pool')

async function getAllMessages() {
    // Use tagged template literals for the SELECT query
    const rows = await pool`SELECT * FROM messages`;
    return rows;
}

async function getOneMessage(id) {
    // Ensure that you return the row result
    const rows = await pool`SELECT * FROM messages WHERE id = ${id}`;
    return rows;
}

async function newMessage(text, user, added) {
    // Correctly insert values using a single VALUES clause
    await pool`INSERT INTO messages (text, user, added) VALUES (${text}, ${user}, ${added})`;
}

module.exports = {
    getAllMessages,
    getOneMessage,
    newMessage
}
