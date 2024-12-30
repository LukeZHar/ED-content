const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Root route with a welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the ExpressJS Server!');
});

// Repeater route to echo a POSTed message
app.post('/repeater', (req, res) => {
    const { message, times } = req.body;
    if (typeof message === 'string' && Number.isInteger(times) && times > 0) {
        const repeatedMessage = message.repeat(times);
        res.send(repeatedMessage);
    } else {
        res.status(400).send('Request must include a "message" string and a "times" integer greater than 0.');
    }
});

// Message Controller for CRUD operations
app.get('/messages', (req, res) => {
    res.send('GET request to retrieve messages');
});

app.post('/messages', (req, res) => {
    res.send('POST request to create a message');
});

app.put('/messages/:id', (req, res) => {
    res.send(`PUT request to update message with ID: ${req.params.id}`);
});

app.delete('/messages/:id', (req, res) => {
    res.send(`DELETE request to remove message with ID: ${req.params.id}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});