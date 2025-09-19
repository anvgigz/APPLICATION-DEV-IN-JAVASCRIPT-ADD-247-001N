/*
find(): Returns the first element that passes the test, or undefined if none found.

findIndex(): Returns the index of the first element that passes the test, or -1 if none found.
*/

// Find first person named Alice
const people = [
  { name: 'Bob', age: 25 },
  { name: 'Alice', age: 30 },
  { name: 'Charlie', age: 35 }
];
const alice = people.find(person => person.name === 'Alice'); // { name: 'Alice', age: 30 }

// Find index of first negative number
const numbers = [1, 2, -3, 4, -5];
const firstNegativeIndex = numbers.findIndex(num => num < 0); // 2
