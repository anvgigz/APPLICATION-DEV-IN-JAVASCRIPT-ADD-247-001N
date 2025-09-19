//Since pure functions always return the same result for the same input,
// // you can cache their results to avoid expensive recalculations.

// Expensive pure function
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// With memoization
const memo = {};

function fibonacciMemo(n) {
    if (n in memo) return memo[n]; // Return cached result
    if (n <= 1) return n;
    memo[n] = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
    return memo[n];
}

// Much faster for repeated calls
console.log(fibonacciMemo(40)); // Fast (cached)
console.log(fibonacciMemo(40)); // Very fast (from cache)


//5.4 Parallel Execution
//Pure functions can be executed in any order or even in parallel because they don't depend on external state or cause side effects.

//6. Managing Impure Functions
//While pure functions are ideal, real programs need to interact with the outside world. The goal is to minimize impurity and isolate it when necessary.