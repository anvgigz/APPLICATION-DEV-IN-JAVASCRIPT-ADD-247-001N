// PURE FUNCTIONS

function add(a, b) {
    return a + b; // Only depends on arguments, no side effects
}

function square(x) {
    return x * x; // Deterministic, no side effects
}

function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`; // Only uses arguments
}


// IMPURE FUNCTIONS

let counter = 0;

function incrementCounter() {
    counter++; // Modifies external state
    return counter;
}

function logMessage(message) {
    console.log(message); // Produces side effect (output)
    return true;
}

function updateUser(user) {
    user.lastLogin = new Date(); // Mutates argument
    return user;
}

function getRandomNumber() {
    return Math.random(); // Different result each time
}