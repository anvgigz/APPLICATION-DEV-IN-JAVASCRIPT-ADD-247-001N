/*
Task 3.1: Demonstrate Referential Transparency
Show how pure functions can be replaced with their results.
*/


// Pure functions
function multiply(a, b) {
  return a * b;
}

function add(a, b) {
  return a + b;
}

// These expressions are equivalent due to referential transparency
const result1 = add(multiply(2, 3), multiply(4, 5)); // add(6, 20)
const result2 = add(6, 20);                          // 26
const result3 = 26;                                  // Final result

// Output results
console.log(result1); // 26
console.log(result2); // 26
console.log(result3); // 26

// All three are equivalent!
console.log(result1 === result2 && result2 === result3); // true