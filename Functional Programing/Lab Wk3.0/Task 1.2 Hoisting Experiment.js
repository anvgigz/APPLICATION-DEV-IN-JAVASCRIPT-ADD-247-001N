/*
    What error message do you get for the notHoisted function?
Error message for notHoisted: ReferenceError: Cannot access 'notHoisted' before initialization
    Why does the hoistedFunction work but notHoisted doesn't?
Why the difference? Function declarations are hoisted with their definitions. Function expressions are hoisted only as variables, not with their function bodies.
    When would you prefer to use function declarations vs expressions?
When to use each:
Use function declarations when you need hoisting or want to define reusable logic.
Use function expressions for inline or scoped logic, especially in callbacks or closures.
*/


// Demonstrating function hoisting in JavaScript

console.log("Testing hoisting...");

//  Function declaration is hoisted  WORKS
console.log(hoistedFunction(5)); // Output: 10

function hoistedFunction(x) {
  return x * 2;
}

// Function expression is NOT hoisted DOES NOT WORK
// This will throw a ReferenceError: Cannot access 'notHoisted' before initialization
console.log(notHoisted(5));

const notHoisted = function(x) {
  return x * 2;
};