//Challenge: Add a new operation (like power or modulo) to the calculator.


//  Create a calculator using functional programming
const calculator = (function() {
  //  Private operations
  const operations = {
    add:      (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide:   (a, b) => b !== 0 ? a / b : "Error: Division by zero",
    power: (a, b) => a ** b,
    modulo: (a, b) => a % b
  };


  //  Public interface
  return {
    calculate: function(operation, a, b) {
      if (operations[operation]) {
        return operations[operation](a, b);
      } else {
        return "Error: Unknown operation";
      }
    },
    getOperations: function() {
      return Object.keys(operations);
    }
  };
})();

//  Test your calculator
console.log(calculator.calculate("add", 10, 5));       // Output: 15
console.log(calculator.calculate("subtract", 10, 5));  // Output: 5
console.log(calculator.calculate("multiply", 10, 5));  // Output: 50
console.log(calculator.calculate("divide", 10, 5));    // Output: 2
console.log(calculator.calculate("divide", 10, 2));   // Output: 5
console.log(calculator.calculate("divide", 10, 0));    // Output: "Error: Division by zero"
console.log(calculator.calculate("power", 2, 3)); // Output: 8
console.log(calculator.calculate("modulo", 10, 3)); // Output: 1

console.log(calculator.getOperations());              


