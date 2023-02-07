class Person {

  constructor(name) {

    //The constructor sets the initial value of the instance variable "name"

    this._name = name;

  }

  

  //Getter method to get the value of "name"

  get name() {

    return this._name;

  }

  

  //Setter method to set the value of "name"

  set name(value) {

    this._name = value;

  }

}

const person = new Person("John");

console.log(person.name); // Output: John

person.name = "Jane";

console.log(person.name); // Output: Jane

// The Person class has an instance variable "_name" which is initialized in the constructor. 

// The getter and setter methods allow us to get and set the value of "_name" respectively. 

// The "get" keyword is used to create a getter method, and the "set" keyword is used to create a setter method. 

// These methods are then accessed as properties on the instance of the class, just like any other property.
