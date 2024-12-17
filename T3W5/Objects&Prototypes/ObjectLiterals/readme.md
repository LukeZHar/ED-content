Object Literals
Dictionaries in Python
In Python, if we had a data type that needed to contain complicated data we would use a dictionary.

 For example, if we had a person with their own properties we would do something like this:

person = {
    name: "John",
    hair-colour: "brown",
    eye-colour: "green"
}
Those data structures are key-value pairs. Most languages have very similar approaches to this sort of data, but instead of calling it a hash or dictionary, in JavaScript we call it an object, or object literal. For example:

personA = {
    name: "John",
    hairColour: "brown",
    eyeColour: "green"
}

let personB = {
    name: "Jane",
    hairColour: "black",
    eyeColour: "brown"
}

const personC = {
    name: "Pikachu",
    hairColour: "yellow",
    eyeColour: "black"
}

In JavaScript, we can perform a lot of the same operations and functions that we can do in Python, but there are some differences.

Objects in JavaScript
To create an empty new object (or object literal), we can use the same syntax used for Python dictionaries:

let object = {} 
Now we have our empty object, how can we add key/value pairs? Two common methods are using the dot notation or bracket notation:

// Dot notation
object.name = "square"
console.log(object)
outputs ----
{name: "square" }

// Bracket notation
object["sides"] = 4
console.log(object)
outputs ----
{ name: "square", sides: 4 }


Notice that keys are always interpreted as strings in JavaScript.

What about if we wanted to read a specific value in our object literal? We can use dot notation or bracket notation again to read a value.

let student = {
  name: "Bob",
  age: 22,
  address: {
    street: "123 Siandra Drive",
    state: "NSW",
    city: "Sydney"
  }
}

// Dot notation
console.log(student.name) ==> outputs "Bob"

// Bracket notation
console.log(student["age"] ==> outputs 22

What if we wanted to access a value nested inside the address? We can chain on these commands to retrieve a value

// Dot notation
console.log(student.address.state) ==> outputs "NSW"

// Bracket notation
console.log(student["address"]["state"] ==> outputs "NSW"
We can also edit and delete data from our object:

let student = {
  name: "Bob",
  age: 22,
  dob: 1998
}

// Updating age
student.age = 23
// or
student["age"] = 23

// Deleting dob
key =  "dob"
delete student[key]
// or
delete student["dob"]
// or
delete student.dob

console.log(student)
outputs ----
{ name: "Bob", age: 23 }

Activity
In the createObject function you need to:

create an empty object and call it object

afterwards, give that object the keys name, age and city with an appropriate value for each

return that object

In the keysAndValues function, we are trying to return the keys and values of an object passed as a parameter, but the code written is not valid for JavaScript. Fix this function so that it works in JavaScript.

In the badData function, the argument being passed is an object that has keys that shouldn't be there. The object should only have the keys name, age and city. If any other key is found in the object, this function should delete the key and associated value.

Example:

console.log(badData({
    name: "John",
    age: 22,
    dob: "15/11/2004",
    city: "Sydney"
}))

returns ----
{ name: "John", age: 22, city: "Sydney" }