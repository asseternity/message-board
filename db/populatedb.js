#! /usr/bin/env node

const pool = require('./pool');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR (255),
    user VARCHAR (255),
    added TIMESTAMP
);

INSERT INTO messages (text, user, added)
VALUES
    ('Hi there!', 'aigul3000', '${new Date().toISOString()}'),
    ('Hey there!', 'azhar4000', '${new Date().toISOString()}'),
    ('Hello there!', 'akhmet2000', '${new Date().toISOString()}');
`;

async function main() {
    console.log('seeding...');
    try {
        await pool(SQL);  // Directly use the pool to execute the SQL
        console.log('done');
    } catch (err) {
        console.error('Error:', err);
    }
}

main();