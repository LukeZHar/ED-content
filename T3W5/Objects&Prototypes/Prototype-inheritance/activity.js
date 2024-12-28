// Define the Person constructor
function Person(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
}

// Add a sayHello method to the Person prototype
Person.prototype.sayHello = function () {
    console.log(`Hi, my name is ${this.name}`);
};

// Define the Student constructor and inherit from Person
function Student(name, age, location, studentId) {
    Person.call(this, name, age, location); // Call Person constructor
    this.studentId = studentId;
}

// Inherit from Person
Student.prototype = Object.create(Person.prototype);

// Add the study method to the Student prototype
Student.prototype.study = function () {
    console.log("I'm learning more every day!");
};

// Define the Educator constructor and inherit from Person
function Educator(name, age, location, wage) {
    Person.call(this, name, age, location); // Call Person constructor
    this.wage = wage;
}

// Inherit from Person
Educator.prototype = Object.create(Person.prototype);

// Add the work method to the Educator prototype
Educator.prototype.work = function () {
    console.log("I have the best job in the world!");
};

// Create instances of Student and Educator
let student = new Student("Mick", 28, "Sydney", 654);
let educator = new Educator("Larry", 40, "Sydney", 1000000000);

// Test the methods
student.sayHello(); // ==> Hi, my name is Mick
educator.sayHello(); // ==> Hi, my name is Larry
student.study(); // ==> I'm learning more every day!
educator.work(); // ==> I have the best job in the world!

// Uncomment the following line if you're ready to run the tests
module.exports = { Person, Student, Educator };