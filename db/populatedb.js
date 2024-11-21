#! /usr/bin/env node

const pool = require("./pool");

async function main() {
  console.log("seeding...");
  try {
    // Create the table if it doesn't exist
    await pool.query(`
            CREATE TABLE IF NOT EXISTS messages (
                id SERIAL PRIMARY KEY,
                text VARCHAR (255),
                "user" VARCHAR (255),
                added TIMESTAMP
            )
        `);

    // Insert initial data
    await pool.query(
      `
            INSERT INTO messages (text, user, added) VALUES
            ('Hi there!', 'aigul3000', $1),
            ('Hey there!', 'azhar4000', $2),
            ('Hello there!', 'akhmet2000', $3)
        `,
      [
        new Date().toISOString(),
        new Date().toISOString(),
        new Date().toISOString(),
      ]
    );

    console.log("done");
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
