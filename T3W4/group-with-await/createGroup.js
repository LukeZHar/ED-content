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
    if((!list || list.length === 0) && size > 0) {
        throw new Error("List is empty. Cannot create a group of size " + size)
    }
    if(size > list.length)
        throw new Error("Group too large. Size limited to " + list.length)
    //create a copy of the array we pass in, so we don't mutate it
    let copy = [...list];
    let group = [];
    // loop the number of times specified by size argument
    for (let i=0; i < size; i++) {
        //grab a random index from copy
        const randomIndex = Math.floor(Math.random() * copy.length);
        //splice returns an array, but it also mutates the array it's performed on. so when we take out the random index we make sure it can't be assigned again
        group.push(copy.splice(randomIndex, 1)[0]);
    }
    return group
}

async function getStudentList(file, size) {
    /*
      Use calls to getData, createList, and createGroup to return a promise from this function that either resolves
      to the list of students, or rejects with the correct error message.

      Use await instead of handling any returned promises with .then and .catch
    */
    try {
        // Await the resolved data from the getData function
        const data = await getData(file);
        const list = createList(data);
        const group = createGroup(list, size);
        return group;
    } catch (error) {
        // Catch any errors that occur and reject the promise
        throw error;
    }
}

// For testing in terminal
// getStudentList(testFile, 2).then((list) => console.log(list))  // should print an array with 2 names
// getStudentList(emptyFile, 2).then((data) => console.log(data)).catch((error) => console.log(error)) // should print List is empty error
// getStudentList(testFile, 50).then((data) => console.log(data)).catch((error) => console.log(error)) // should print Group too large error


module.exports = {getData, getStudentList}