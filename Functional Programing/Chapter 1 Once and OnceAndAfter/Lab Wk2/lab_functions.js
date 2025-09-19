
// Task 1: once()
const once = (fn) => {
    let called = false;
    return (...args) => {
        if (!called) {
            called = true;
            return fn(...args);
        }
    };
};

// Task 2: onceAndAfter()
const onceAndAfter = (f, g) => {
    let called = false;
    return (...args) => {
        if (!called) {
            called = true;
            return f(...args);
        } else {
            return g(...args);
        }
    };
};

// Task 3: Real-world application
let cart = {
    items: [
        { name: "Laptop", price: 999.99 },
        { name: "Mouse", price: 29.99 }
    ],
    total: 0
};

function calculateTotal() {
    cart.total = cart.items.reduce((sum, item) => sum + item.price, 0);
    console.log("Cart total calculated:", cart.total);
    return cart.total;
}

function processPayment(amount) {
    console.log(`Processing payment of $${amount}`);
    console.log("Payment successful!");
    return true;
}

function showPaymentWarning(amount) {
    console.log(`WARNING: Payment of $${amount} already processed.`);
}

const processBilling = onceAndAfter(
    () => processPayment(cart.total),
    () => showPaymentWarning(cart.total)
);

// Task 4: callNTimes()
const callNTimes = (fn, n) => {
    let count = 0;
    return (...args) => {
        if (count < n) {
            count++;
            return fn(...args);
        } else {
            console.log(`Limit reached: Function can only be called ${n} times.`);
        }
    };
};

module.exports = { once, onceAndAfter, callNTimes, calculateTotal, processBilling };
