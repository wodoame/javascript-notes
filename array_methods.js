// The Array object in JavaScript has several methods for manipulating arrays. Here are some of the most commonly used ones:

// 1. push() - Adds elements to the end of an array
const fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
console.log(fruits); // Output: [ "apple", "banana", "cherry", "orange" ]

// 2. pop() - Removes the last element of an array
const fruits = ["apple", "banana", "cherry"];
fruits.pop();
console.log(fruits); // Output: [ "apple", "banana" ]

// 3. shift() - Removes the first element of an array
const fruits = ["apple", "banana", "cherry"];
fruits.shift();
console.log(fruits); // Output: [ "banana", "cherry" ]

// 4. unshift() - Adds elements to the front of an array
const fruits = ["apple", "banana", "cherry"];
fruits.unshift("orange");
console.log(fruits); // Output: [ "orange", "apple", "banana", "cherry" ]

// 5. splice() - Adds/Removes elements from an array
const fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1, "orange");
console.log(fruits); // Output: [ "apple", "orange", "cherry" ]

// 6. slice() - Returns a copy of part of an array
const fruits = ["apple", "banana", "cherry"];
const citrus = fruits.slice(1, 2);
console.log(citrus); // Output: [ "banana" ]
console.log(fruits); // Output: [ "apple", "banana", "cherry" ]

// 7. sort() - Sorts elements of an array
const fruits = ["apple", "banana", "cherry"];
fruits.sort();
console.log(fruits); // Output: [ "apple", "banana", "cherry" ]

// 8. reverse() - Reverses the elements of an array
const fruits = ["apple", "banana", "cherry"];
fruits.reverse();
console.log(fruits); // Output: [ "cherry", "banana", "apple" ]

// 9. map() - Creates a new array with the results of calling a provided function on every element in the array
const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt);
console.log(roots); // Output: [ 1, 2, 3 ]

// 10. filter() - Creates a new array with all elements that pass the test implemented by the provided function
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [ 2, 4, 6 ]

// 11. reduce() - Executes a reducer function on each element of the array, resulting in a single output value
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);
