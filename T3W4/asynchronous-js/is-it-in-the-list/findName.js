const fs = require('fs'); 

function checkList(name, callback) {
    fs.readFile('./names.txt', 'utf8', (error, data) => callback(error, data, name));
}

function findName(error, data, name) {
    if (error) {
        console.error("Error reading the file:", error);
        return;
    }

    // Split the data into an array of names
    const namesList = data.split('\n').map(name => name.trim());

    // Check if the given name is in the list
    if (namesList.includes(name)) {
        console.log(`${name} is in the list`);
    } else {
        console.log(`${name} is not in the list`);
    }
}

/* The tests for this challenge pass in names to test.
 You can get arguments passed in to node using the process.argv object.
 The line below removes the first two elements of the process.argv array.
 The first two elements are the full path to node and the full path to the JS file.
 Anything we pass as an argument will be additional elements in process.argv.
 Try console logging process.argv to get a better understanding of how this works.
*/
const names = process.argv.slice(2)
// loop through each name passed as an argument and call checkList
names.forEach((name) => {
    checkList(name, findName);
});