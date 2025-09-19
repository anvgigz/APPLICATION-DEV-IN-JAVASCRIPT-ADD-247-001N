//Testing impure functions requires more setup and often involves mocking or spying on dependencies.

// Impure function to test
function generateUserID() {
    const timestamp = Date.now();
    const random = Math.random();
    return `user_${timestamp}_${random}`;
}

// Testing with property-based testing
function testGenerateUserID() {
    const id1 = generateUserID();
    const id2 = generateUserID();

    // Test properties rather than exact values
    console.log(id1.startsWith('user_')); // Should start with 'user_'
    console.log(id1 !== id2);             // Should be different each time
    console.log(id1.length > 10);         // Should have reasonable length
    console.log(id1)
    console.log(id2)
}

testGenerateUserID();