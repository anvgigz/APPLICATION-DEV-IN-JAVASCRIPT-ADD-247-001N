/*
Task 4.1: Make Functions Testable
Use dependency injection to make impure functions more testable.
*/

// Original impure function
function generateUserID() {
  const timestamp = Date.now();
  const random = Math.random();
  return `user_${timestamp}_${random}`;
}

// Pure version with dependency injection
function generateUserIDPure(getTimestamp, getRandom) {
  const timestamp = getTimestamp();
  const random = getRandom();   
  return `user_${timestamp}_${random}`;
}

// Mock functions for testing
const mockTimestamp = () => 1234567890;
const mockRandom = () => 0.5;

// Test the pure version
console.log(generateUserIDPure(mockTimestamp, mockRandom)); // "user_1234567890_0.5"
console.log(generateUserIDPure(mockTimestamp, mockRandom)); // "user_1234567890_0.5" (same result)


//Challenge: Convert this impure function using dependency injection:

// Original impure function
function createFileName() {
  const random = Math.floor(Math.random() * 1000);
  const timestamp = Date.now();
  return `file_${timestamp}_${random}.txt`;
}

// Pure version with dependency injection
function createFileNamePure(getRandom, getTimestamp) {
  const random = Math.floor(getRandom() * 1000);
  const timestamp = getTimestamp();
  return `file_${timestamp}_${random}.txt`;
}

console.log(createFileNamePure(mockRandom, mockTimestamp)); // "file_1234567890_500.txt"
console.log(createFileNamePure(mockRandom, mockTimestamp)); // "file_1234567890_500.txt" (same result)