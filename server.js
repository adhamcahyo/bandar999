const express = require('express');
const mysql = require('mysql2');

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
