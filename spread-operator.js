// The spread operator (`...`) in JavaScript is a versatile and useful feature that allows you to manipulate arrays and objects in various ways.
// It was introduced in ECMAScript 6 (ES6) and has since become a common and powerful tool in modern JavaScript development.

// Here's how the spread operator is used with arrays and objects:

// 1. Spread operator with arrays:
   // - **Expanding an array**: You can use the spread operator to expand an array into its individual elements.

   
   const originalArray = [1, 2, 3];
   const expandedArray = [...originalArray, 4, 5];
   // expandedArray is now [1, 2, 3, 4, 5]
   

   // - **Copying an array**: You can make a shallow copy of an array using the spread operator.

  
   const originalArray = [1, 2, 3];
   const copyArray = [...originalArray];
   // copyArray is a new array with the same elements as originalArray
  

   // - **Merging arrays**: You can merge two or more arrays into a single array.

  
   const arr1 = [1, 2];
   const arr2 = [3, 4];
   const mergedArray = [...arr1, ...arr2];
   // mergedArray is [1, 2, 3, 4]


// 2. Spread operator with objects:
   // - **Expanding an object**: You can use the spread operator to expand the properties of an object into a new object.

  
   const originalObj = { name: 'John', age: 30 };
   const expandedObj = { ...originalObj, city: 'New York' };
   // expandedObj is { name: 'John', age: 30, city: 'New York' }
   // this can even be used to change existing values for example
   const expandedObj = {...originalObj, name:'Wodoame'}
   // expandedObj is { name: 'Wodoame', age: 30, city: 'New York' }


   // - **Copying an object**: You can make a shallow copy of an object using the spread operator.

   const originalObj = { name: 'John', age: 30 };
   const copyObj = { ...originalObj };
   // copyObj is a new object with the same properties as originalObj

   // - **Merging objects**: You can merge two or more objects into a single object.

   const obj1 = { a: 1, b: 2 };
   const obj2 = { b: 3, c: 4 };
   const mergedObj = { ...obj1, ...obj2 };
   // mergedObj is { a: 1, b: 3, c: 4 }

// The spread operator is especially useful for avoiding mutations and creating new arrays or objects with modified content.
// It is widely used in modern JavaScript development, including in frameworks like React and for various data manipulation tasks.

// The spread operator can also be used when passing arguments to functions.
// This is a common use case and allows you to pass an array (or any iterable) as individual arguments to a function.
// It can be particularly useful when you want to call a function that expects a certain number of arguments and you have those arguments in an array or iterable.
// Here's how it works:

function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

// Using the spread operator to pass array elements as individual arguments
const result = sum(...numbers); // Equivalent to sum(1, 2, 3)

console.log(result); // Output: 6


// In this example, the `sum` function expects three arguments, but we have the numbers in an array.
// By using the spread operator, we effectively pass the elements of the `numbers` array as separate arguments to the `sum` function.

// You can also use the spread operator to combine individual arguments with other arguments as needed:

function greet(name, ...otherNames) {
  console.log(`Hello, ${name}!`);
  console.log(`And hello to: ${otherNames.join(', ')}`);
}

const names = ['Alice', 'Bob', 'Charlie'];

// Using the spread operator to pass an array element as the first argument and other elements as an array
greet(...names); // Equivalent to greet('Alice', 'Bob', 'Charlie')

// In this example, the `greet` function takes the first argument as the main name and the rest of the arguments as an array using the rest parameter (`...otherNames`).
// We use the spread operator to pass the elements of the `names` array as individual arguments for `name` and the rest of the names.

// Using the spread operator for function arguments can make your code more flexible and readable, especially when dealing with functions that accept varying numbers of arguments or when you want to pass the contents of an array or iterable to a function.
