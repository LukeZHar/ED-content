const express = require('express');
const app = express();

// Addition
app.get('/calculator/:num1/add/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const result = num1 + num2;
    res.json({ "operation": `${num1} plus ${num2}`, "result": result });
});

// Subtraction
app.get('/calculator/:num1/subtract/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const result = num1 - num2;
    res.json({ "operation": `${num1} minus ${num2}`, "result": result });
});

// Multiplication
app.get('/calculator/:num1/multiply/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const result = num1 * num2;
    res.json({ "operation": `${num1} multiplied by ${num2}`, "result": result });
});

// Division
app.get('/calculator/:num1/divide/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    if (num2 === 0) {
        return res.status(400).json({ "error": "Division by zero is undefined" });
    }
    const result = num1 / num2;
    res.json({ "operation": `${num1} divided by ${num2}`, "result": result });
});

// Catch-all for unsupported operations
app.get('/calculator/:num1/:operation/:num2', (req, res) => {
    res.status(404).json({ "error": "Operation not found" });
});

// Set the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
