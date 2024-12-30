Calculator API Challenge
Your challenge is to create a calculator API.

It should be able to add, subtract, multiply and divide any two integers, and return a JSON object with the operation as a string and the result as a number. Attempting to perform any operation outside of these four should return a 404 NOT FOUND error.


Do this challenge on your own computer and confirm that you've completed the challenge by matching your code's output to what is outlined below:

making a GET request at /calculator/1/add/1 should return

{
    "operation": "1 plus 1",
    "result": 2
}
making a GET request at /calculator/2/subtract/1 should return

{
    "operation": "2 minus 1",
    "result": 1
}
making a GET request at /calculator/5/divide/2 should return

{
    "operation": "5 divided by 2",
    "result": 2.5
}
making a GET request at /calculator/2/multiply/3 should return

{
    "operation": "2 multiplied by 3",
    "result": 6
}
making a GET request at /calculator/2/asparagus/3 should return a standard 404 response.

Use Insomnia or Postman to test your API!


----------------------------------------------

Step-by-Step Setup
Install Node.js: Ensure you have Node.js and npm installed on your system. You can download it from nodejs.org.

Create a New Project:

Open your terminal and run the following commands to create a new directory for your project and initialize it:

bash

mkdir calculator-api
cd calculator-api
npm init -y
Install Express:

Install the Express framework:

bash

npm install express
Create the Application:

Create a file named app.js in the project directory and add the following code:

javascript

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
Run the Server:

Save the file and start your server by running:

bash

node app.js
You'll see a message indicating that the server is running.

Test the API:

You can make GET requests to test the API endpoints using tools like Postman or Insomnia:

Addition: GET /calculator/1/add/1 should return:

json

{
    "operation": "1 plus 1",
    "result": 2
}
Subtraction: GET /calculator/2/subtract/1 should return:

json

{
    "operation": "2 minus 1",
    "result": 1
}
Multiplication: GET /calculator/2/multiply/3 should return:

json

{
    "operation": "2 multiplied by 3",
    "result": 6
}
Division: GET /calculator/5/divide/2 should return:

json

{
    "operation": "5 divided by 2",
    "result": 2.5
}
Unsupported operation: GET /calculator/2/asparagus/3 should return a 404 error:

json

{
    "error": "Operation not found"
}