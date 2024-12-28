4. Prototype Inheritance
Now that we have a better understanding of an object prototype, let's see how we can use this to mimic inheritance.

function Human(name) {
  this.legs = 2;
  this.arms = 2;
  this.head = 1;
  this.name = name
}

Human.prototype.walk = function() {
  return `Taking a stroll with my ${this.legs} legs.`;
};

function Man(name) {
  Human.call(this, name); 
  // pass a reference of `this` object to the Human object constructor.
}
let homer = new Human("Homer");
console.log(homer);
console.log(homer.__proto__);
let garret = new Man("Garret");
console.log(garret);
console.log(garret.__proto__);

// The next line will cause a TypeError: garret.walk is not a function
// garret.walk();

If you run the code above, you may notice that the walk function is missing from the prototype for garret.

You could verify this by trying to invoke the walk function on the garret object:

garret.walk();
You would get a TypeError because there is no walkwfunction defined on the prototype for Man. It is necessary to explicitly inherit the prototype chain from Human using Object.create to assign the Human prototype to Man.prototype:

Man.prototype = Object.create(Human.prototype);
let bob = new Man("Bob");
bob.walk();
This can be really confusing but it is really powerful. ES6 has given us some new keywords and syntax to help with the confusion but under the hood it is still using prototype inheritance.

Activity
In this activity we'll be practising inheritance with prototypes. Uncomment the module.exports when you are ready to run the tests

Firstly, create a new constructor function that is a Person. This is going to be our "parent" from which other prototypes will inherit.

Each Person should have their own name, age and location

Next, lets create 2 more constructors: a Student and an Educator.

Both of these should inherit, or call the Person prototype.

For now, the only difference between a Student and an Educator is that a Student has a studentId and an Educator has a wage. Add these to their respective constructors.

Now lets start adding some functions to our prototypes. Students AND Educators should both able to sayHello() which outputs a welcome message: `Hi, my name is ${name}`

Students should have the study() function that logs the message: "I'm learning more every day!"

Educators should have the work() function that logs the message: "I have the best job in the world!"

let student = new Student("Mick", 28, "Sydney", 654)
let educator = new Educator("Larry", 40, "Sydney", 1000000000)

student.sayHello() ==> outputs "Hi, my name is Mick"
educator.sayHello() ==> outputs "Hi, my name is Larry"
student.study() ==> outputs "I'm learning more every day!"
educator.work() => outputs "I have the best job in the world!"
