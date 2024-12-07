//Create web server
const express = require('express');
const app = express();
const port = 3000;

const comments = [
  {
    id: 1,
    username: 'Alice',
    comment: 'Hello from Alice'
  },
  {
    id: 2,
    username: 'Bob',
    comment: 'Hello from Bob'
  },
  {
    id: 3,
    username: 'Charlie',
    comment: 'Hello from Charlie'
  }
];
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});