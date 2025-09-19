
//Challenge: Create a function that filters numbers greater than 3 and then doubles them, using pointfree style.

//  Sample data
const numbers = [1, 2, 3, 4, 5];
const words = ["hello", "world", "javascript", "functions"];

//  Helper functions
const double = x => x * 2;
const addOne = x => x + 1;
const getLength = str => str.length;
const toUpperCase = str => str.toUpperCase();

//  Pointfree-style transformations
const doubledNumbers      = numbers.map(double);        // Instead of: x => double(x)
const incrementedNumbers  = numbers.map(addOne);        // Instead of: x => addOne(x)
const wordLengths         = words.map(getLength);       // Instead of: str => getLength(str)
const upperCaseWords      = words.map(toUpperCase);     // Instead of: str => toUpperCase(str)

//  Test your results
console.log(doubledNumbers);       // Output: [2, 4, 6, 8, 10]
console.log(incrementedNumbers);   // Output: [2, 3, 4, 5, 6]
console.log(wordLengths);          // Output: [5, 5, 10, 9]
console.log(upperCaseWords);       // Output: ["HELLO", "WORLD", "JAVASCRIPT", "FUNCTIONS"]


const isGreaterThan3 = x => x > 3;

// Pointfree-style transformation
const filteredAndDoubled = numbers.filter(isGreaterThan3).map(double);


console.log(filteredAndDoubled); // Output: [8, 10]
