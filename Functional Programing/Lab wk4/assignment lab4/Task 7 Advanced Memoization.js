/*
Advanced: Memoization
Implement a memoization function for pure functions.
*/

// Create a memoization function
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log('Returning cached result for:', args);
      return cache[key];
    }
    console.log('Computing new result for:', args);
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

// Test with an expensive function
function expensiveCalculation(n) {
  console.log('Performing expensive calculation for:', n);
  // Simulate expensive computation
  let result = 0;
  for (let i = 0; i < n * 1000000; i++) {
    result += Math.sqrt(i);
  }
  return result;
}

// Memoized version
const memoizedCalculation = memoize(expensiveCalculation);

// First call - expensive
console.log(memoizedCalculation(5));

// Second call - cached (fast)
console.log(memoizedCalculation(5));

// Different input - expensive again
console.log(memoizedCalculation(10));