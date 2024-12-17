// Creates and returns an object with the properties:
//  name
//  age
//  city
function createObject() {
    const object = {
        name: "Luke",
        age: 30,
        city: "Brisbane"
    }
    return object;
}

// Returns a two dimensional array 
// with an array of keys and an array of values from obj
function keysAndValues(obj) {
    // This isn't the correct way to get the keys and values
    // of an object in JavaScript. Fix the code:
    let keys = Object.keys(obj)
    let values = Object.values(obj)

    // Dont change the function signature or the return statement
    return [keys, values]
} 

// Returns obj with all invalid data removed
// Only valid keys are:
//  name
//  age
//  city
function badData(obj) {
    // Ensure obj is an object, if not return an empty object
    if (typeof obj !== 'object' || obj === null) {
        return {};
    }

    const validKeys = ["name", "age", "city"];
    const cleanedData = {};

    // Iterate over valid keys and add to cleanedData if they exist in the original object
    validKeys.forEach(key => { 
        if (obj.hasOwnProperty(key)) {
            cleanedData[key] = obj[key]; // Keep the value unchanged
        }
    });

    return cleanedData; // Return the new object
}

module.exports = {
    createObject,
    keysAndValues,
    badData
}