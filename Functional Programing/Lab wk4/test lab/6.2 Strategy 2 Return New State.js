// Impure function (mutates array)
function addItemToCart(cart, item) {
    cart.push(item); // Side effect: modifies original array
    return cart;
}

// Pure function (returns new array)
function addItemToCartPure(cart, item) {
    return [...cart, item]; // Returns new array, doesn't modify original
}

// Usage
const originalCart = ['apple', 'banana'];
const newCart = addItemToCartPure(originalCart, 'orange');

console.log(originalCart); // ['apple', 'banana'] (unchanged)
console.log(newCart);      // ['apple', 'banana', 'orange']