// A higher-order function that takes another function as a parameter
function doSomethingWithArray(array, operation) {
    // The map() function applies the operation to each element in the array
    return array.map(operation); // map() is also a higher-order function!
}

// Example usage
const numbers = [1, 2, 3, 4];

// Pass an arrow function that doubles each number
const doubled = doSomethingWithArray(numbers, x => x * 2);

// Output the result
console.log(doubled); // Result: [2, 4, 6, 8]
