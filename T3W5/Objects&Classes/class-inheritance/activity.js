class Person {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    sayHello() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, location, studentId) {
        super(name, age, location); // Call the parent class's constructor
        this.studentId = studentId;
    }

    study() {
        console.log("I'm learning more every day!");
    }
}

class Educator extends Person {
    constructor(name, age, location, wage) {
        super(name, age, location); // Call the parent class's constructor
        this.wage = wage;
    }

    work() {
        console.log("I have the best job in the world!");
    }
}

module.exports = { Person, Student, Educator };