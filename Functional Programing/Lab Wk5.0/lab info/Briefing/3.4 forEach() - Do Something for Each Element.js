/*What it does: Executes a function for each element in an array (like a for loop, but cleaner).

Use when: You want to perform side effects (like logging or updating the DOM).

*/

// Log each number
const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(`Number: ${num}`));

// Add click event to each button
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => console.log('Clicked!'));
});
