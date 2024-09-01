#! /usr/bin/env node

require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool();

const now = new Date().toISOString();

async function main() {
    console.log('seeding...');
    const client = await pool.connect();
    try {
        await client.query('CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, text VARCHAR (255), user VARCHAR (255), added TIMESTAMP)');
        
        const query = 'INSERT INTO messages (text, user, added) VALUES ($1, $2, $3), ($4, $5, $6), ($7, $8, $9)';
        const values = [
            'Hi there!', 'Aigul3000', now,
            'Hey there!', 'Azhar4000', now,
            'Hello there!', 'Akhmet2000', now
        ];
        
        await client.query(query, values);
        console.log('done');
    } catch (err) {
        console.error('Error:', err);
    } finally {
        client.release(); // Release the client back to the pool
        // Do not close the pool here
    }
}

main();
