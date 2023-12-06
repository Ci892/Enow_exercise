const express = require('express');
const app = express();

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header('Cross-Origin-Resource-Policy', 'same-site');
  next();
});

// Serve your static files (assuming they are in the "public" directory)
app.use(express.static('public'));

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
app.use((req, res, next) => {
  res.header('Cross-Origin-Resource-Policy', 'same-site');
  next();
});