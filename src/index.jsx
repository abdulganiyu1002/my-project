// index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Dummy users data (replace with database)
const users = [
  { id: 1, email: 'user@example.com', password: 'password' },
  // Add more users as needed
];

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    // Successful login
    res.json({ success: true, message: 'Login successful', user });
  } else {
    // Failed login
    res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
