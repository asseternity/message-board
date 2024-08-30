require('dotenv').config();
const postgres = require('postgres');

const pool = postgres({
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  ssl: 'require',  // As per Koyeb's documentation
});

module.exports = pool;