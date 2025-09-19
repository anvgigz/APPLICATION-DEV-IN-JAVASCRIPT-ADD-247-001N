
//For each function below, determine if it's pure or impure. Explain your reasoning.


// Function 1: Pure addition
function add(a, b) {
    return a + b;
}

// Function 2: Impure counter increment
let counter = 0;
function incrementCounter() {
    counter++;
    return counter;
}

// Function 3: Get current time (impure due to time dependency)
function getCurrentTime() {
    return new Date().toISOString();
}

// Function 4: Calculate area (pure)
function calculateArea(width, height) {
    return width * height;
}

// Function 5: Log message (impure due to side effect)
function logMessage(message) {
    console.log(message);
    return true;
}

// Function 6: Format full name (pure)
function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// Function 7: Update user object with login time (impure due to mutation)
function updateUser(user) {
    user.lastLogin = new Date();
    return user;
}

// Function 8: Generate random number (impure due to non-determinism)
function getRandomNumber() {
    return Math.random();
}


//Test the functions to verify your analysis.

// Test pure functions
console.log("Testing add function:");
console.log(add(2, 3)); // Should always return 5
console.log(add(2, 3)); // Should always return 5
console.log(add(2, 3)); // Should always return 5

// Test impure functions
console.log("Testing getRandomNumber function:");
console.log(getRandomNumber()); // Different each time
console.log(getRandomNumber()); // Different each time
console.log(getRandomNumber()); // Different each time

// Test counter function
console.log("Testing incrementCounter function:");
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2
console.log(incrementCounter()); // 3