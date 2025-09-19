/*
Task 2.1: Convert Impure to Pure
Convert these impure functions to pure functions.
*/


// Original impure function
let userCount = 0;

function addUser() {
  userCount++;
  return userCount;
}

// Pure version of the function
function addUserPure(currentCount) {
  return currentCount + 1;
}

// Test both versions
console.log("Impure version:");
console.log(addUser()); // 1
console.log(addUser()); // 2

console.log("Pure version:");
console.log(addUserPure(0)); // 1
console.log(addUserPure(1)); // 2
console.log(addUserPure(0)); // 1 (same input, same output)

// Impure function: modifies the original cart array
function updateCart(cart, item) {
  cart.push(item);
  return cart;
}

// Pure function: returns a new array without modifying the original
function updateCartPure(cart, item) {
  return [...cart, item];
}