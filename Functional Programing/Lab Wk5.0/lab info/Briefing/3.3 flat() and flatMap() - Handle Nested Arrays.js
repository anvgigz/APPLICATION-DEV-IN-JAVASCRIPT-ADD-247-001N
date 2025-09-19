// ✅ Flatten nested arrays
const nested = [[1, 2], [3, 4], [5, 6]];

const flat = nested.flat();
console.log("Flattened array:", flat); // Result: [1, 2, 3, 4, 5, 6]

// ✅ Use flatMap to split sentences into words
const sentences = ['Hello world', 'Good morning'];

const words = sentences.flatMap(sentence => sentence.split(' '));
console.log("Words:", words); // Result: ['Hello', 'world', 'Good', 'morning']
