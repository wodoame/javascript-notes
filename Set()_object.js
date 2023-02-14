// The Set object in JavaScript is used to store multiple items in a collection
// It's similar to an array but has some important differences:
// - No duplicates allowed
// - No order guarantee
// - Unordered elements

// You can create a Set object by calling the Set() constructor and passing in an iterable object, such as an array
let numbers = [1, 2, 3, 4, 5];
let set = new Set(numbers);
console.log(set); // Set { 1, 2, 3, 4, 5 }

// You can also create an empty Set object by just calling new Set() without any arguments
let emptySet = new Set();
console.log(emptySet); // Set {}

// You can add, remove, and check for the existence of elements in a Set object using the following methods:
// - add(value): Adds a new element with the given value to the Set object
// - delete(value): Removes the element with the given value from the Set object
// - has(value): Returns true if an element with the given value exists in the Set object, and false otherwise

let set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set); // Set { 1, 2, 3 }

set.delete(2);
console.log(set); // Set { 1, 3 }

console.log(set.has(2)); // false
console.log(set.has(3)); // true
