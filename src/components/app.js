// app.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Signup route
app.post('/signup', (req, res) => {
  const { fullName, email, password } = req.body;

  db.run('INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)', [fullName, email, password], (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(201).json({ message: 'User created successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
