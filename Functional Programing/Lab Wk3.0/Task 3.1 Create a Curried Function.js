//Challenge: Create a curried function for calculating the area of a triangle (base × height ÷ 2).


//  Regular function to calculate volume
function calculateVolume(length, width, height) {
  return length * width * height;
}

//  Curried version of the volume function
const curriedVolume = length => width => height => length * width * height;

//  Test both versions
console.log(calculateVolume(2, 3, 4));       // Output: 24
console.log(curriedVolume(2)(3)(4));         // Output: 24

//  Create partial functions using currying
const volumeWithLength2 = curriedVolume(2);
const volumeWithLength2AndWidth3 = volumeWithLength2(3);

console.log(volumeWithLength2AndWidth3(4));  // Output: 24
console.log(volumeWithLength2AndWidth3(5));  // Output: 30

const curriedTriangleArea = base => height => (base * height) / 2;
console.log(curriedTriangleArea(10)(5)); // Output: 25
