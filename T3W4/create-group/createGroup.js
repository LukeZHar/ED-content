const fs = require('fs');

// For testing in terminal
const testFile = "/home/students.txt"
const emptyFile = "/home/empty.txt"

// We're giving you this one - but make sure you understand what is happening in this function
function getData(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (error, data) => {
            if (error) {
              reject(error.message)
            }
            resolve(data);
        })
    })
}

// Given the string `data`, return an array of names
function createList(data) {
    return data.split("\n").filter((val) => val.length > 0)
}

function createGroup(list,size) {
    /*
      If the list is empty and size > 0, throw an Error with the message:
      "List is empty. Cannot great a group of size " + size

      If size is more than array.length, throw an Error with the message:
      "Group too large. Size limited to " + list.length

      If size and list are valid, return a array of size with random values from list
    */
    if (list.length === 0 && size > 0) {
        throw new Error("List is empty. Cannot create a group of size " + size);
    }
    if (size > list.length) {
        throw new Error("Group too large. Size limited to " + list.length);
    }
    
    const shuffled = list.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
}

function getStudentList(file, size) {
    /*
      Use calls to getData, createList, and createGroup to return a Promise from this function that either resolves
      to the list of students, or rejects with the correct error message.

      Hint: Using promise chaining to make the implementation simpler
    */
    return getData(file)
        .then(data => createList(data))
        .then(list => {
            try {
                return createGroup(list, size);
            } catch (error) {
                return Promise.reject(error);
            }
        });
}

// For testing in terminal
// getStudentList(testFile, 2).then((list) => console.log(list))  // should print an array with 2 names
// getStudentList(emptyFile, 2).then((data) => console.log(data)).catch((error) => console.log(error)) // should print List is empty error
// getStudentList(testFile, 50).then((data) => console.log(data)).catch((error) => console.log(error)) // should print Group too large error


module.exports = {getData, getStudentList}