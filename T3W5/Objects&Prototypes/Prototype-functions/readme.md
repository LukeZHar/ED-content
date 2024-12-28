Prototypes - Functions
Let's see another example of how prototype can be very useful.

function Hero(name, level) {
  this.name = name;
  this.level = level;
  this.shout = function() {
    return `My name is ${this.name}!`;
  };
}

let conan = new Hero("Conan", 100);
let batman = new Hero("Batman", 60);

conan.shout();
batman.shout();

So, our constructors can include functions as well. While this is powerful, underneath the hood there is some inefficiencies in the way that it has been written. If we output the conan and batman objects individually:

console.log(conan);
console.log(batman);
We can see that the shout() function has been duplicated on both objects. This is a waste of memory, so instead a better way is to use prototype to assign functions. 

function Villian(name, level) {
  this.name = name;
  this.level = level;
}

Villian.prototype.shout = function() {
  return `I am the evil ${this.name}!`;
};

let joker = new Villian("Joker", 60);
let iceman = new Villian("Iceman", 20);

joker.shout();
iceman.shout();

So now if we console log our joker and iceman objects: 

console.log(joker);
console.log(iceman);
we can see that that shout() function doesn't exist on each individual object, it is stored on the prototype. 

Activity
In the scaffold, we can see a constructor function for the Shape. This needs two functions:

an aboutMe function that outputs the shape colour and number of sides:

Example: I am a 4 sided red shape

a warning function that prints one of two messages:

if the shape is pointy it will output "Warning! I am pointy!"

if it is not pointy it will output "I am safe."

let square = new Shape(4, "blue", true)
let circle = new Shape(Infinity, "red", false)

square.aboutMe() ==> logs "I am a 4 sided blue shape"
circle.aboutMe() ==> logs "I am a Infinity sided red shape"

square.warning() ==> logs "Warning! I am pointy!"
circle.warning() ==> logs "I am safe."