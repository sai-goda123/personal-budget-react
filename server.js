const express = require('express');
const fs = require('fs');
const cors = require('cors'); // Import the CORS middleware
const app = express();
const port = 3001; // Set the port to 3001 (or any other port of your choice)

// Use the CORS middleware to allow requests from all origins
app.use(cors());

// Serve static files from the 'public' directory (your React build directory)
app.use('/', express.static('public'));

// Read budget data from JSON file
const budgetData = JSON.parse(fs.readFileSync('myBudget.json', 'utf8'));

app.get('/budget', (req, res) => {
  res.json(budgetData);
});

app.get('/budget-data', (req, res) => {
  res.json(budgetData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
