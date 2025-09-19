/* FOR BROWSER */


// I/O operations
console.log("Hello world");
alert("User message");
document.getElementById("button").click();

// Random number generation
Math.random();
Date.now();
new Date();

// Array mutations
const arr = [1, 2, 3];
arr.push(4);       // Modifies original array
arr.sort();        // Modifies original array

// Global state modifications
window.userCount = 5;
localStorage.setItem("key", "value");


/*
9. Best Practices
Guidelines for Writing Pure Functions
Get all data from arguments: Don't access global variables or external state
Return new data instead of modifying: Use spread operators, map, filter, etc.
Avoid side effects: No console.log, DOM manipulation, or API calls
Use dependency injection: Pass impure functions as arguments
Keep functions small and focused: One function, one responsibility
10. Conclusion
Pure functions are powerful tools that make your code more predictable, testable, and maintainable. While it's not always possible to make every function pure, striving for purity where possible and isolating impure code will significantly improve your code quality.

Key Takeaways
Pure functions always return the same output for the same input
Pure functions have no side effects
Referential transparency allows function calls to be replaced with their results
Pure functions are easier to test, debug, and optimize
Use strategies like dependency injection to make impure functions more testable
Aim for purity where possible, but don't eliminate all side effects
Practice Questions
Test Your Understanding:

Is Math.max(5, 10) a pure function? Why or why not?
What makes console.log("Hello") impure?
How could you make a function that generates random numbers more testable?
What's the difference between a pure function and an idempotent function?
Why is it easier to test pure functions than impure ones?
*/