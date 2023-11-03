// JavaScript destructuring is a feature that allows you to extract values from arrays or objects and assign them to variables in a more concise and readable way.
// It can simplify the process of accessing and working with data stored in complex data structures.

// Destructuring works with arrays and objects and is often used in variable assignment. Here's how it works:

// 1. Array Destructuring:
// You can destructure an array by using square brackets `[]` on the left-hand side of an assignment.
// The order of variables on the left corresponds to the order of elements in the array.

  
   const [first, second] = [1, 2];
   console.log(first);  // 1
   console.log(second); // 2
   

   // You can also skip elements using a comma:


   const [first, , third] = [1, 2, 3];
   console.log(first);  // 1
   console.log(third); // 3


// 2. Object Destructuring:
//  With object destructuring, you can extract values from an object by using curly braces `{}` on the left-hand side of an assignment.
// The variable names should match the object's property names.

   const person = { firstName: 'John', lastName: 'Doe' };
   const { firstName, lastName } = person;
   console.log(firstName); // 'John'
   console.log(lastName);  // 'Doe'

   // You can also provide default values for variables in case the property is not found in the object:

   const { firstName, lastName, age = 30 } = person;
   console.log(firstName); // 'John'
   console.log(lastName);  // 'Doe'
   console.log(age);      // 30 (default value)
  

// 3. Nested Destructuring:
//  You can destructure nested structures, such as objects within objects or arrays within objects:

   const user = {
     name: 'Alice',
     address: {
       city: 'New York',
       postalCode: '10001',
     },
   };

   const { name, address: { city, postalCode } } = user;
   console.log(name);       // 'Alice'
   console.log(city);       // 'New York'
   console.log(postalCode); // '10001'
  

// Destructuring is a powerful feature in JavaScript that can make your code more concise and readable, especially when working with complex data structures.
// It is commonly used in modern JavaScript, especially with ES6 and later versions of the language.
