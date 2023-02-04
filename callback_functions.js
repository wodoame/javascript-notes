// There are several ways to write callback functions in JavaScript:

// 1. Function declaration:
function myCallback(arg1, arg2) {
  // Function code here
}

// 2. Function expression:
const myCallback = function(arg1, arg2) {
 // Function code here
};

// 3. Arrow function expression:
const myCallback = (arg1, arg2) => {
 // Function code here
};

// Note that arrow functions are more concise than function expressions and are a preferred way of writing callbacks in modern JavaScript.

// All three ways of writing callbacks can be passed as arguments to other functions, including array methods like `reduce()`, `map()`, and `filter()`.
