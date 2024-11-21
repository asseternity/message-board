#! /usr/bin/env node

const pool = require("./pool");

async function main() {
  console.log("seeding...");
  try {
    // Create the table if it doesn't exist
    await pool`
            CREATE TABLE IF NOT EXISTS messages (
                id SERIAL PRIMARY KEY,
                text VARCHAR (255),
                user VARCHAR (255),
                added TIMESTAMP
            )
        `;

    // Insert initial data
    await pool`
            INSERT INTO messages (text, user, added) VALUES
            ('Hi there!', 'aigul3000', ${new Date().toISOString()}),
            ('Hey there!', 'azhar4000', ${new Date().toISOString()}),
            ('Hello there!', 'akhmet2000', ${new Date().toISOString()})
        `;

    console.log("done");
  } catch (err) {
    console.error("Error:", err);
  }
}

main();