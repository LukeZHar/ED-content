Prototypes
In addition to creating object literals, we can use the new keyword to create an Object in JavaScript.

// object creation through a function constructor
let object_2 = new Object();
console.log(object_2); ==> outputs {}
Here Object() is known as a object constructor function.

Object constructor functions
We can create instances of a Person without having to manually construct each object, reducing the potential for human error. By convention object constructor functions are always capitalised.

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.awesome = true;
}

let student1 = new Person("Sarah", 24);
let student2 = new Person("John", 30);
console.log(student1); ==> outputs Person { name: 'Sarah', age: 24, awesome: true }
console.log(student2); ==> outputs Person { name: 'John', age: 30, awesome: true }

There are 2 things to take notice here:

We need to use the new keyword when creating an object from an object constructor function

We are using the this keyword 

The value of this when used in an object is the object itself

The keyword this is one of the more confusing parts of JavaScript objects

As with any object literal definition we can still access the properties on our object using either dot or bracket notation.

console.log(student1.name); ==> outputs "Sarah"
console.log(student1["age"]); ==> outputs 24
When using an object constructor function you cannot add a new property to the constructor directly after it has been defined.

Person.country = "Australia";
let student3 = new Person("Sam", 28);

console.log(student3); ==> outputs Person { name: 'Sam', age: 28, awesome: true }
Editing the Person directly like this doesn't actually give any new Person a country attribute. To retroactively change the Person, we need to go through its prototype.

Prototypes
JavaScript uses what is know as prototype inheritance.

All JavaScript objects inherit properties and methods from a prototype. To retroactively add extra attributes to our Person, we go through its prototype.

Person.prototype.country = "Australia"
let student4 = new Person("Tom", 20)

// Our original student
console.log(student1.country); ==> outputs "Australia"
// Our latest student
console.log(student4.country); ==> outputs "Australia"

Activity
In the scaffold code,  every time I need to create a new shape, I have to manually create the object with its key value pairs, and that could lead to a human error or incorrect information. Instead, create a constructor function called Shape that will create a new shape for me. 

Implement the constructor function for Shape. Make sure you pass appropriate arguments to the function. Clicking the Mark button will test your solution.


Example Outputs:
console.log(shape1); // Outputs: Shape { sides: 3, colour: 'blue', pointy: true }
console.log(shape2); // Outputs: Shape { sides: 4, colour: 'red', pointy: true }
console.log(shape3); // Outputs: Shape { sides: Infinity, colour: 'pink', pointy: false }
