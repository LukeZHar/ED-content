Creating classes
As stated previously, classes are defined with the class keyword and the name of the class is always capitalised. 

class Shape {
}

let shape = new Shape()
Classes can have a constructor function. The arguments go inside the parentheses of the constructor function, and just like in prototype constructor functions, we can use the this keyword to assign values to instance properties.

class Rectangle {
  constructor(height, width) {
    this.height = height
    this.width = width
  }
}

let r = new Rectangle(20, 10)

console.log(r) ==> outputs Rectangle { height: 20, width: 10 }

We can also define prototype functions directly within the class. 

One difference about declaring a function inside of a class definition is that we do not use the function keyword. That's because when we define a function inside of a class, it is called a method in JavaScript, and it is a shorthand for a function assigned the method name.

You can refer to instance properties and methods from methods within the class definition using the this keyword:

class Rectangle {
    ... constructor minimized for brevity
  area() {
    return this.height * this.width;
  }
  
  // outputStats is a class method that refers to 
  // the instance properties (height, width)
  // and the area method
  outputStats() {
      console.log(`My height is ${this.height}`)
      console.log(`My width is ${this.width}`)
      console.log(`My area is ${this.area()}`)
  }
}

console.log(r.area()) ==> outputs 200
r.outputStats()

outputs ----
"My height is 20"
"My width is 10"
"My area is 200"

Activity
You will create a dog class with a number of methods that will allow us to walk our dog and output important information about each walk.

Create a Dog class. Each dog should have a name and a breed.

Create the following methods:

speak()

Outputs "Woof! My name is [name]"

walk(location, distance)

Parameters:

location a string representing the location of the walk (i.e., "Spring Hill", "Dog Park") 

distance a number representing the distance of the walk in km

When this method is called, the location and distance are stored in an instance variable. 

Hint: Instantiate an empty array called allWalks in the constructor. Save each walk as an object with the keys, location and distance.

displayWalks()

Outputs all of the dog's walk locations and distances in the following format:

"Story Bridge, 2km"

"Opera House, 3km"

totalDistance()

Outputs the total distance that this dog has walked. For example: "Spike has walked 5km"

Implement the class with all of the mentioned properties and methods. Create some instances of the new class and play around to test that it works as expected.