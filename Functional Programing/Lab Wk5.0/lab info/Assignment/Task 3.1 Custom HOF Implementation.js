// Challenge: Implement your own map() function
function myMap(array, callback) {
  // Your implementation here
  // Should return a new array with the results of calling callback on each element
}

const testArray = [1, 2, 3, 4];
const doubled = myMap(testArray, x => x * 2);
console.log('My map result:', doubled); // Should be [2, 4, 6, 8]

// Challenge: Implement your own filter() function
function myFilter(array, predicate) {
  // Your implementation here
  // Should return a new array with elements that pass the predicate test
}

const evens = myFilter(testArray, x => x % 2 === 0);
console.log('My filter result:', evens); // Should be [2, 4]

/* Hint: Use a for loop inside your HOF to iterate through the array and apply the callback function to each element. */
