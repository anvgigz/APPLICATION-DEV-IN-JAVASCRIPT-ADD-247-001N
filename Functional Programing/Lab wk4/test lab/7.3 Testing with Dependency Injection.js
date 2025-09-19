//When you use dependency injection, you can test the logic with predictable inputs.

// Function with injected dependencies
function createFileName(getRandomNumber, getTimestamp) {
    const random = Math.floor(getRandomNumber() * 1000);
    const timestamp = getTimestamp();
    return `file_${timestamp}_${random}.txt`;
}

// Test with mock functions
const mockRandom = () => 0.5;           // Always returns 0.5
const mockTimestamp = () => 1234567890; // Always returns same timestamp

const fileName = createFileName(mockRandom, mockTimestamp);
console.log(fileName); // "file_1234567890_500.txt" (predictable)