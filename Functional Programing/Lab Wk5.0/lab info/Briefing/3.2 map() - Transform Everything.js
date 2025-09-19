// ✅ Double all numbers in an array
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(x => x * 2);
console.log("Doubled:", doubled); // Result: [2, 4, 6, 8]

// ✅ Extract names from an array of objects
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

const names = people.map(person => person.name);
console.log("Names:", names); // Result: ['Alice', 'Bob', 'Charlie']

// ✅ Convert words to uppercase
const words = ['hello', 'world'];

const upperWords = words.map(word => word.toUpperCase());
console.log("Uppercase Words:", upperWords); // Result: ['HELLO', 'WORLD']
