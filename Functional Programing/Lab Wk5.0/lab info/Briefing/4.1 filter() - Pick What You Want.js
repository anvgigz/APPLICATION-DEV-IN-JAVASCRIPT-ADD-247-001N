/*
What it does: Creates a new array with only the elements that pass a test.

Think of it as: A sieve that only lets certain items through.
*/

// Get only even numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0); // [2, 4, 6]

// Get people over 30
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 }
];
const over30 = people.filter(person => person.age > 30); // [{ name: 'Charlie', age: 35 }]
