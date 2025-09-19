// Mathematical operations
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const square = x => x * x;

// String operations
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const reverse = str => str.split('').reverse().join('');

// Array operations (without mutation)
const addToArray = (arr, item) => [...arr, item];
const removeFromArray = (arr, index) => arr.filter((_, i) => i !== index);

// Object operations (without mutation)
const updateObject = (obj, key, value) => ({ ...obj, [key]: value });
const removeFromObject = (obj, key) => {
    const { [key]: removed, ...rest } = obj;
    return rest;
};

console.log(add(2, 3) === 5);           // true
console.log(multiply(4, 5) === 20);     // true
console.log(square(6) === 36);          // true

console.log(capitalize('hello') === 'Hello');     // true
console.log(reverse('world') === 'dlrow');        // true

const arr = [1, 2, 3];
const newArr = addToArray(arr, 4);
console.log(JSON.stringify(arr) === '[1,2,3]');           // true (original unchanged)
console.log(JSON.stringify(newArr) === '[1,2,3,4]');      // true

const removedArr = removeFromArray(arr, 1);
console.log(JSON.stringify(removedArr) === '[1,3]');      // true

const obj = { name: 'Alice', age: 30 };
const updatedObj = updateObject(obj, 'age', 31);
console.log(obj); // Original object
console.log(JSON.stringify(obj)); // original object printed to console as a string
console.log(JSON.stringify(obj) === '{"name":"Alice","age":30}');       // true (original unchanged)
console.log(JSON.stringify(updatedObj) === '{"name":"Alice","age":31}'); // true

const cleanedObj = removeFromObject(obj, 'age');
console.log(JSON.stringify(cleanedObj) === '{"name":"Alice"}');         // true