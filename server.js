const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bandar999',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});

app.use(bodyParser.json());

app.post('/api/register', (req, res) => {
  const {
    username,
    full_name,
    email,
    phone,
    account_number,
    bank,
    password,
  } = req.body;
n

  const query = `
    INSERT INTO users (username, full_name, email, phone, account_number, bank, password)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    username,
    full_name,
    email,
    phone,
    account_number,
    bank,
    password,
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error:', err);
      res.status(500).json({ message: 'Failed to register. Please try again later.' });
    } else {
      console.log('Data inserted:', result);
      res.json({ message: 'Registration successful!' });
    }
  });
  
});

app.get('/api/deposit-history', (req, res) => {
  const query = 'SELECT * FROM deposit_history';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Failed to get deposit history' });
    } else {
      res.status(200).json(results);
    }
  });
});

app.get('/api/withdraw-history', (req, res) => {
  const query = 'SELECT * FROM withdraw_history';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Failed to get withdraw history' });
    } else {
      res.status(200).json(results);
    }
  });
});

app.get('/api/bet-history', (req, res) => {
  const query = 'SELECT * FROM bet_history';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Failed to get bet history' });
    } else {
      res.status(200).json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
