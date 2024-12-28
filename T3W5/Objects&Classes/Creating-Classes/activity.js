class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.allWalks = []; // Initialize an empty array to store walks
    }

    // Method to simulate the dog speaking
    speak() {
        console.log(`Woof! My name is ${this.name}`);
    }

    // Method to record a walk
    walk(location, distance) {
        // Store each walk as an object with location and distance keys
        this.allWalks.push({ location, distance });
    }

    // Method to display all walks
    displayWalks() {
        this.allWalks.forEach(walk => {
            console.log(`${walk.location}, ${walk.distance}km`);
        });
    }

    // Method to calculate and output the total distance walked
    totalDistance() {
        const total = this.allWalks.reduce((sum, walk) => sum + walk.distance, 0);
        console.log(`${this.name} has walked ${total}km`);
    }
}

// Example usage

// Create instances of Dog
let dog1 = new Dog('Buddy', 'Golden Retriever');
let dog2 = new Dog('Daisy', 'Labrador');

// Testing methods
dog1.speak(); // Outputs: "Woof! My name is Buddy"
dog1.walk('Spring Hill', 2);
dog1.walk('Dog Park', 3);
dog1.displayWalks();
// Outputs:
// "Spring Hill, 2km"
// "Dog Park, 3km"
dog1.totalDistance(); // Outputs: "Buddy has walked 5km"

dog2.speak(); // Outputs: "Woof! My name is Daisy"
dog2.walk('Central Park', 1.5);
dog2.displayWalks();
// Outputs:
// "Central Park, 1.5km"
dog2.totalDistance(); // Outputs: "Daisy has walked 1.5km"

// Exporting the Dog class for use in other files/modules
module.exports = Dog;