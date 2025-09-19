/*
every(): Returns true if ALL elements pass the test.

some(): Returns true if AT LEAST ONE element passes the test.
*/

const numbers1 = [1, 2, 3, 4];
const allPositive = numbers1.every(num => num > 0); // true

const numbers2 = [1, -2, 3, 4];
const allPositive2 = numbers2.every(num => num > 0); // false
const hasNegative = numbers2.some(num => num < 0);   // true
