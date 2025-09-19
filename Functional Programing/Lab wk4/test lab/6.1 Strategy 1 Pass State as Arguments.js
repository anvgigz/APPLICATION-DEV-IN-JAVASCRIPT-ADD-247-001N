// Impure function (depends on global state)
let currentYear = 2024;

function isOldEnough(birthYear) {
    return (currentYear - birthYear) >= 18;
}

// Pure function (state passed as argument)
function isOldEnoughPure(currentYear, birthYear) {
    return (currentYear - birthYear) >= 18;
}

// Usage
console.log(isOldEnoughPure(2024, 2000)); // true
console.log(isOldEnoughPure(2024, 2010)); // false