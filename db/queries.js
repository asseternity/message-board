const pool = require('./pool');

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function getOneMessage(id) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
    return rows;
}

async function newMessage(text, username, added) {
    await pool.query("INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)", [text, username, added]);
}

module.exports = {
    getAllMessages,
    getOneMessage,
    newMessage
};
