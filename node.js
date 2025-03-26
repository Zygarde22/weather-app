// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/get-api-key', (req, res) => {
    // Ensure you have your key securely stored on the server, not in this file
    const apiKey = 'YOUR_SECRET_API_KEY'; // Replace with your actual key
    res.json({ message: apiKey });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
