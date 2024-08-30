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
<<<<<<< HEAD
        // Use tagged template literals for queries
        await sql`
            ${sql(SQL)}
        `;
        console.log('done');
    } catch (err) {
        console.error('Error:', err);
    } finally {
        await sql.end(); // Close the connection
=======
        await pool(SQL);  // Directly use the pool to execute the SQL
        console.log('done');
    } catch (err) {
        console.error('Error:', err);
>>>>>>> 2a98324c9db77b35baef45de21b09eefa93d9d5d
    }
}

main();