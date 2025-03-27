const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Define a proper endpoint for getting the API key
app.post('/get-api-key', (req, res) => {
    const apiKey = '877de1e0e8b04a1ba80235309252603'; // Replace with your actual key
    res.json({ message: apiKey });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
