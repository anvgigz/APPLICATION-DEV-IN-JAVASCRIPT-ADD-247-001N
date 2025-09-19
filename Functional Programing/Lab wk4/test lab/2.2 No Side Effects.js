// Pure function - no side effects
function calculateArea(width, height) {
    return width * height; // Only returns a value
}

// Impure function - has side effects
let total = 0;

function addToTotal(value) {
    total += value; // Modifies external state
    console.log("Total is now:", total); // Produces output
    return total;
}

console.log(total); // Initial total: 0
console.log(addToTotal(5)); // Total is now: 5
console.log(total); // Total after function call: 5
console.log(addToTotal(10)); // Total is now: 15
console.log(total); // Total after function call: 15