// Easy to test pure function
function isEven(number) {
    return number % 2 === 0;
}

// Test cases are simple
console.log(isEven(2));    // true
console.log(isEven(3));    // false
console.log(isEven(0));    // true
console.log(isEven(-2));   // true