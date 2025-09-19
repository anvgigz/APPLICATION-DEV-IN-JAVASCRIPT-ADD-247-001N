// ✅ Sum all numbers in an array
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, current) => total + current, 0);
console.log("Sum:", sum); // Result: 15

// ✅ Calculate average of the array
const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
console.log("Average:", average); // Result: 3

// ✅ Find the longest word in an array
const words = ['cat', 'dog', 'elephant', 'bird'];

const longest = words.reduce((longest, current) =>
    current.length > longest.length ? current : longest, ''
);
console.log("Longest word:", longest); // Result: 'elephant'
