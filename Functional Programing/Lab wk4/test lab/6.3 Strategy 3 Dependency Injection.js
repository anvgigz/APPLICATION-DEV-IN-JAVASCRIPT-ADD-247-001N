// Impure function (calls Math.random directly)
function generateRandomName() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    return `User_${randomLetter}`;
}

// Pure function (random function injected)
function generateRandomNamePure(getRandomNumber) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(getRandomNumber() * letters.length);
    const randomLetter = letters[randomIndex];
    return `User_${randomLetter}`;
}

// Usage
const mockRandom = () => 0.1; // Always returns 0.5 for testing

console.log(generateRandomNamePure(mockRandom)); // "User_M" (predictable)