/*
Task 5.1: Test Pure Functions
Write simple tests for pure functions.
*/

// Pure function to test if a number is even
function isEven(number) {
  return number % 2 === 0;
}

// Test function for isEven
function testIsEven() {
  console.log("Testing isEven function:");
  console.log(isEven(2) === true);    // true
  console.log(isEven(3) === false);   // true
  console.log(isEven(0) === true);    // true
  console.log(isEven(-2) === true);   // true
  console.log(isEven(-3) === false);  // true
}

testIsEven();

// Pure function to calculate tax
function calculateTax(income, taxRate) {
  return income * taxRate;
}

// Test function for calculateTax
function testCalculateTax() {
  console.log("Testing calculateTax function:");
  console.log(calculateTax(1000, 0.1) === 100);    // true
  console.log(calculateTax(5000, 0.2) === 1000);   // true
  console.log(calculateTax(0, 0.15) === 0);        // true
}

testCalculateTax();