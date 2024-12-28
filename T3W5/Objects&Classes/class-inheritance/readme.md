Class inheritance
One class inherits from another by using the extends keyword. For example, if Square extends Shape, it will have access to all of Shape's properties and methods. 

class Shape {
  constructor(height, width) {
    this.height = height
    this.width = width
  }
  area() {
    return this.height * this.width
  }
}

class Square extends Shape {
  isSquare() {
    if (this.height === this.width) {
      console.log("I am a square!)
    } else {
      console.log("ERR I am not a square!")
    }
  }
}

let sq = new Square(10, 10)
sq.isSquare() ==> outputs "I am a square!"
sq.area() ==> ouptuts 100

The super keyword gives us access to the parent class. We are able to use it to call methods on the parent. 

Shape.prototype.talk = function(input = "shape") {
  console.log(`I am a talking ${input}`);
};

class Octagon extends Shape {
  
  talk() {
    super.talk("octagon");
  }
}

let oct = new Octagon(4, 9);
oct.talk() ==> outputs "I am a talking octagon"
sq.talk() ==> outputs "I am a talking shape"

Activity
In the scaffold code three prototypes are defined. Your task is to convert these prototypes to classes with the same inheritance and methods. At the moment, all the tests are passing except for the one about classes, this will pass when the prototypes have been converted to classes.