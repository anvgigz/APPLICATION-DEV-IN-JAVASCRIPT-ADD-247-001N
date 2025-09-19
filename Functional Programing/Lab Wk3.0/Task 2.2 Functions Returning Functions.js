/*
    What type of function is createGreeter?
Type of createGreeter: Higher-order function.
    What type of function does createGreeter return?
Type it returns: Anonymous function (closure).
    How many parameters does the returned function take?
Parameters of returned function: One (name).
*/


//  Function that returns a personalized greeter
function createGreeter(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

// 🙋 Create different greeter functions
const sayHello = createGreeter("Hello");
const sayGoodbye = createGreeter("Goodbye");
const sayHi = createGreeter("Hi");

//  Test the greeters
console.log(sayHello("Alice"));     // Output: "Hello, Alice!"
console.log(sayGoodbye("Bob"));     // Output: "Goodbye, Bob!"
console.log(sayHi("Charlie"));      // Output: "Hi, Charlie!"

