// Sample data
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const people = [
  { name: 'Alice', age: 30, city: 'NYC' },
  { name: 'Bob', age: 25, city: 'LA' },
  { name: 'Charlie', age: 35, city: 'NYC' },
  { name: 'Diana', age: 28, city: 'Chicago' }
];

// Challenge 1: Convert this imperative loop to use filter()
const evenNumbersDeclarative = numbers.filter(/* your code here */);

// Challenge 2: Convert this imperative loop to use map()
const doubledNumbersDeclarative = numbers.map(/* your code here */);

// Challenge 3: Convert this imperative loop to use reduce()
const sumDeclarative = numbers.reduce(/* your code here */, 0);

/* Questions:
 - Which version is shorter and easier to read?
 - Which version is less prone to bugs?
 - What happens if you forget the initial value in reduce()? */
