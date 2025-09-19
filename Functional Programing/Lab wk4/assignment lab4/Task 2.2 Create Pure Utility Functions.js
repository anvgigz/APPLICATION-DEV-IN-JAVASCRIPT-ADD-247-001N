/*
Task 2.2: Create Pure Utility Functions
Create pure versions of common utility functions.
*/


// Create these pure functions:

// 1. Function to calculate the average of an array
function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
}

// 2. Function to filter users by age
function filterUsersByAge(users, minAge) {
  return users.filter(user => user.age >= minAge);
}

// 3. Function to format a price with currency
function formatPrice(price, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(price);
}

// Test your functions
const numbers = [1, 2, 3, 4, 5];
console.log(calculateAverage(numbers)); // 3

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 }
];
console.log(filterUsersByAge(users, 18));
// [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }]

console.log(formatPrice(19.99)); // "$19.99"