// Implement the constructor function
// What arguments should this function have? Add them.
function Shape(sides, colour, pointy) {
    this.sides = sides;  // Number of sides
    this.colour = colour; // Colour of the shape
    this.pointy = pointy; // Whether the shape is pointy or not
}

// Change the declarations below to use the Shape constructor instead
let shape1 = {
    sides: 3,
    colour: "blue",
    pointy: true
} 
let shape2 = {
    sides: 4,
    colour: "red",
    points: true   
}
let shape3 = {
    sides: Infinity,
    colour: "pink",
    pointy: false
}

module.exports = Shape