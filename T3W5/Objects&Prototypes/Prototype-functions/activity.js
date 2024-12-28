function Shape(sides, colour, pointy) {
    this.sides = sides;
    this.colour = colour;
    this.pointy = pointy;
}

// Add the aboutMe function to the prototype
Shape.prototype.aboutMe = function() {
    console.log(`I am a ${this.sides} sided ${this.colour} shape`);
};

// Add the warning function to the prototype
Shape.prototype.warning = function() {
    if (this.pointy) {
        console.log("Warning! I am pointy!");
    } else {
        console.log("I am safe.");
    }
};

// Create instances to test the functions
let square = new Shape(4, "blue", true);
let circle = new Shape(Infinity, "red", false);

// Test the methods
square.aboutMe();   // logs "I am a 4 sided blue shape"
circle.aboutMe();   // logs "I am a Infinity sided red shape"

square.warning();   // logs "Warning! I am pointy!"
circle.warning();   // logs "I am safe."

module.exports = Shape;