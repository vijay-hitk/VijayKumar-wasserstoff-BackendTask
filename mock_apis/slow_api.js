const express = require('express');
const app = express();

app.get('/slow', (req, res) => {
  setTimeout(() => {
    res.json({ message: 'Slow response' });
  }, Math.random() * 2000 + 1000); // Random delay between 1-3 seconds
});

app.listen(3002, () => {
  console.log('Slow API listening on port 3002');
});
