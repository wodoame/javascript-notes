// Errors in JavaScript can occur for various reasons, and they are a common part of the development process.
// JavaScript provides a mechanism for handling errors using the `try...catch` statement.
// Let's explore the different types of errors and how you can handle them:

// 1. **Syntax Errors:**
//    These occur when there is a mistake in the structure of your code. They are detected by the JavaScript engine during parsing.

   
   // Example of a syntax error
   let x = 10
   console.log(x;
   // SyntaxError: Unexpected token ';'
   

   // **Handling Syntax Errors:**
   // Since syntax errors are detected during code parsing, you typically need to fix them before running the code.

// 2. **Runtime Errors (Exceptions):**
//    These errors occur during the execution of the code. They are often referred to as exceptions.

   
   // Example of a runtime error
   let x = 10;
   let y = x.toUpperCase();
   // TypeError: x.toUpperCase is not a function
   

   // **Handling Runtime Errors with `try...catch`:**
   // Use the `try...catch` statement to handle runtime errors and prevent them from crashing your application.

   
   try {
     let x = 10;
     let y = x.toUpperCase();  // This line will throw a TypeError
     console.log(y);
   } catch (error) {
     console.error('An error occurred:', error.message);
   }
   

// 3. **Logical Errors:**
//    These errors occur when there is a mistake in the logic of your code. The code runs without throwing an error, but it does not produce the expected result.

   
   // Example of a logical error
   function add(x, y) {
     return x - y;  // This should be x + y
   }

   console.log(add(5, 3));  // Outputs 2 instead of 8
   

   // **Handling Logical Errors:**
   // Logical errors require debugging and fixing the flawed logic in your code. Tools like console logging, breakpoints, and debugging tools can help identify and correct logical errors.

// 4. **Custom Errors:**
//    You can also create and throw custom errors using the `throw` statement. This is useful when you want to signal specific conditions in your code.

   
   function divide(x, y) {
     if (y === 0) {
       throw new Error('Cannot divide by zero');
     }
     return x / y;
   }

   try {
     console.log(divide(10, 0));
   } catch (error) {
     console.error('An error occurred:', error.message);
   }
   

   // Custom errors can be more descriptive and provide additional information about the nature of the error.

Understanding and handling errors is an essential part of writing robust JavaScript code. It helps improve the reliability of your applications and makes it easier to diagnose and fix issues during development.
