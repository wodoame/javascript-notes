// In JavaScript, classes are a way to create objects that share similar properties and methods. 
class Car {
  // Constructor function to initialize the object's properties
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Method to display the car's properties
  displayDetails() {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
  }
}

// Creating an instance of the Car class
const myCar = new Car("Toyota", "Camry", 2020);

// Calling the displayDetails method on the instance
myCar.displayDetails();

// Output: 
// Make: Toyota
// Model: Camry
// Year: 2020
