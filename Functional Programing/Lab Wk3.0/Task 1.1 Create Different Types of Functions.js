/*
        Which function type is the shortest to write?
1)  Shortest to write: calculateArea3 (arrow function).
        What happens if you try to call calculateArea2 before it's defined?
2)  Calling calculateArea2 before it's defined: You'll get a ReferenceError because function expressions are not hoisted.
        Which function type would you use for a simple calculation?
3)  Best for simple calculations: Arrow functions (calculateArea3) — concise and readable.

*/


// 1. Named function declaration
function calculateArea1(width, height) {
  return width * height;
}

// 2. Anonymous function expression
const calculateArea2 = function(width, height) {
  return width * height;
};

// 3. Arrow function
const calculateArea3 = (width, height) => width * height;

// Test your functions
console.log(calculateArea1(5, 3)); // Should output: 15
console.log(calculateArea2(4, 6)); // Should output: 24
console.log(calculateArea3(2, 8)); // Should output: 16

console.log(hoistedFunction(5)); // Works output: 10
function hoistedFunction(x) {
  return x * 2;
}

console.log(notHoisted(5)); // Error
const notHoisted = function(x) {
  return x * 2;
};
