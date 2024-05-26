// db.js
const sqlite3 = require('sqlite3').verbose();

// Open SQLite database
const db = new sqlite3.Database('./database.db');

// Create users table
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT,
    email TEXT UNIQUE,
    password TEXT
  )
`);

module.exports = db;
