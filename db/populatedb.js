#! /usr/bin/env node

const { argv } = require('node:process');
const { Client } = require('pg');

const CREATE_TABLE_SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR (255), 
    username VARCHAR (255), 
    added TIMESTAMP
);
`;

const INSERT_MESSAGES_SQL = `
INSERT INTO messages (text, username, added) VALUES
    ($1, $2, $3),
    ($4, $5, $6),
    ($7, $8, $9);
`;

async function main() {
    console.log('seeding...');
    const client = new Client({
        connectionString: argv[2],
    });
    await client.connect();
    const now = new Date();

    // Create the table
    await client.query(CREATE_TABLE_SQL);

    // Insert data
    await client.query(INSERT_MESSAGES_SQL, [
        'Hi!', 'zhamal_9000', now,
        'Hi!', 'daniyar_7000', now,
        'Hi!', 'maksat_8000', now
    ]);

    await client.end();
    console.log('done');
}

main();

module.exports = { main }