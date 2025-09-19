// Referentially transparent function
function multiply(a, b) {
    return a * b;
}

// These are equivalent:
const result1 = multiply(5, 3) + multiply(2, 4);
const result2 = 15 + 8;
// We can replace multiply(5, 3) with 15 and multiply(2, 4) with 8

// NOT referentially transparent function
function getCurrentTime() {
    return new Date().toISOString();
}

// These are NOT equivalent:
const time1 = getCurrentTime();
const time2 = "2024-01-15T10:30:00.000Z";
// This is just one possible result

console.log(getCurrentTime()); // Example: 2024-01-15T10:30:00.000Z