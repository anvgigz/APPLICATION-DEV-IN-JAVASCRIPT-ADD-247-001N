/*
Task 6.1: Build a Shopping Cart System
Create a shopping cart system using pure functions.
*/

// 🛒 Pure shopping cart functions

// Add an item to the cart
function addItem(cart, item) {
  return [...cart, item];
}

// Remove an item from the cart by ID
function removeItem(cart, itemId) {
  return cart.filter(item => item.id !== itemId);
}

// Update the quantity of a specific item
function updateQuantity(cart, itemId, newQuantity) {
  return cart.map(item =>
    item.id === itemId ? { ...item, quantity: newQuantity } : item
  );
}

// Calculate the total price of items in the cart
function calculateTotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Get the total number of items in the cart
function getItemCount(cart) {
  return cart.reduce((count, item) => count + item.quantity, 0);
}

// 🧪 Test the shopping cart functionality

const initialCart = [];

const item1 = { id: 1, name: 'Apple', price: 0.50, quantity: 3 };
const item2 = { id: 2, name: 'Banana', price: 0.30, quantity: 2 };

let cart = initialCart;

// Add items
cart = addItem(cart, item1);
cart = addItem(cart, item2);
console.log('Cart after adding items:', cart);
console.log('Total:', calculateTotal(cart));         // Expected: 2.10
console.log('Item count:', getItemCount(cart));      // Expected: 5

// Update quantity
cart = updateQuantity(cart, 1, 5);
console.log('Cart after updating quantity:', cart);
console.log('New total:', calculateTotal(cart));     // Expected: 3.10

// Remove item
cart = removeItem(cart, 2);
console.log('Cart after removing item:', cart);
console.log('Final total:', calculateTotal(cart));   // Expected: 2.50