//Testing pure functions is straightforward - just provide inputs and check outputs.

// Pure function to test
function calculateArea(width, height) {
    return width * height;
}

// Simple test cases
console.log(calculateArea(2, 3) === 6);     // true
console.log(calculateArea(0, 5) === 0);     // true
console.log(calculateArea(1.5, 2) === 3);   // true