// Pure function - predictable behavior
function calculateTax(income, taxRate) {
    return income * taxRate;
}

// You can be confident this will always work the same way
const tax = calculateTax(50000, 0.25); // Always returns 12500