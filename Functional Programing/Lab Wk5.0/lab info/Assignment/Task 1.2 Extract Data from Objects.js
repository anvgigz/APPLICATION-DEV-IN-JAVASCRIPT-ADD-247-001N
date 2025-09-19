// 1. Extract all names
const names = people.map(/* your code here */);

// 2. Find people over 30
const over30 = people.filter(/* your code here */);

// 3. Find the first person from NYC
const firstNYC = people.find(/* your code here */);

// 4. Check if everyone is over 20
const allOver20 = people.every(/* your code here */);

// 5. Check if anyone is from Chicago
const hasChicago = people.some(/* your code here */);

// Test your solutions
console.log('Names:', names);
console.log('Over 30:', over30);
console.log('First NYC:', firstNYC);
console.log('All over 20:', allOver20);
console.log('Has Chicago:', hasChicago);

/* Expected Results:
 - names: ['Alice', 'Bob', 'Charlie', 'Diana']
 - over30: [{name: 'Alice', age: 30, city: 'NYC'}, {name: 'Charlie', age: 35, city: 'NYC'}]
 - firstNYC: {name: 'Alice', age: 30, city: 'NYC'}
 - allOver20: true
 - hasChicago: true */
