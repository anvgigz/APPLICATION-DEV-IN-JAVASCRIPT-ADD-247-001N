//Challenge: Create a new math function (like power or modulo) and test it with performOperation.

// Define basic math operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const power = (a, b) => a ** b;
const modulo = (a,b) => a % b;

//  Function that performs a given operation
function performOperation(operation, a, b) {
  return operation(a, b);
}

//  Test the performOperation function
console.log(performOperation(add, 10, 5));      // Output: 15
console.log(performOperation(subtract, 10, 5)); // Output: 5
console.log(performOperation(multiply, 10, 5)); // Output: 50
console.log(performOperation(divide, 10, 5));   // Output: 2
console.log(performOperation(power, 2, 3)); // Output: 8
console.log(performOperation(modulo,10,3)); //Output: 1

