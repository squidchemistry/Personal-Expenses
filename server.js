const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to serve login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Endpoint to serve add transaction page
app.get('/addtransaction', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'addtransaction.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
