/*
    Why can't you access counter.count directly?
Why counter.count is undefined: count is private inside the IIFE closure.
    What would happen if you created a second counter?
Creating a second counter: It would have its own independent count variable.
    How is this different from using a global variable?
Difference from global variable: Global variables are shared and mutable across the app; closures encapsulate state privately.    
*/

//  Create a counter using IIFE (Immediately Invoked Function Expression)
const counter = (function() {
  let count = 0; // Private variable

  return {
    increment: function() {
      return ++count;
    },
    decrement: function() {
      return --count;
    },
    getCount: function() {
      return count;
    },
    reset: function() {
      count = 0;
      return count;
    }
  };
})();

//  Test your counter
console.log(counter.getCount());     // Output: 0
console.log(counter.increment());    // Output: 1
console.log(counter.increment());    // Output: 2
console.log(counter.decrement());    // Output: 1
console.log(counter.reset());        // Output: 0

//  Try to access the private variable
console.log(counter.count);          // Output: undefined