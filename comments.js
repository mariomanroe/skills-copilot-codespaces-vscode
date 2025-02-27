// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a GET route
app.get('/comments', (req, res) => {
  res.send('GET request to the homepage');
});

// Create a POST route
app.post('/comments', (req, res) => {
  res.send('POST request to the homepage');
});

// Create a PUT route
app.put('/comments', (req, res) => {
  res.send('PUT request to the homepage');
});

// Create a DELETE route
app.delete('/comments', (req, res) => {
  res.send('DELETE request to the homepage');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
