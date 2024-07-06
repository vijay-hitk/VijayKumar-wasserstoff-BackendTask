const express = require('express');
const app = express();

app.get('/fast', (req, res) => {
  res.json({ message: 'Fast response' });
});

app.listen(3001, () => {
  console.log('Fast API listening on port 3001');
});
