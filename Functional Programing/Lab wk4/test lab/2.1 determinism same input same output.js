// Pure function - always returns the same result
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Always returns 5
console.log(add(2, 3)); // Always returns 5
console.log(add(2, 3)); // Always returns 5

// Impure function - result can vary
function getRandomNumber() {
    return Math.random(); // Different result each time
}

console.log(getRandomNumber()); // Example: 0.123456789
console.log(getRandomNumber()); // Example: 0.987654321
console.log(getRandomNumber()); // Example: 0.456789123

