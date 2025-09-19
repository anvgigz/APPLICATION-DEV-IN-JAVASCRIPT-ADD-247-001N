/*
Task 5.2: Test Impure Functions
Write property-based tests for impure functions.
*/


// Impure function to generate a random alphanumeric string
function generateRandomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Property-based testing for generateRandomString
function testGenerateRandomString() {
  console.log("Testing generateRandomString properties:");

  // Test multiple calls
  const str1 = generateRandomString(5);
  const str2 = generateRandomString(5);
  const str3 = generateRandomString(5);
  console.log(str1);

  // Test properties rather than exact values
  console.log(str1.length === 5); // Should be correct length
  console.log(str2.length === 5); // Should be correct length
  console.log(str3.length === 5); // Should be correct length

  console.log(str1 !== str2); // Should be different (likely)
  console.log(str2 !== str3); // Should be different (likely)

  console.log(/^[A-Za-z0-9]+$/.test(str1)); // Should contain only allowed characters
  console.log(/^[A-Za-z0-9]+$/.test(str2)); // Should contain only allowed characters
  console.log(/^[A-Za-z0-9]+$/.test(str3)); // Should contain only allowed characters
}

// Run the test
testGenerateRandomString();

