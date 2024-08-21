/**
 * Creates a function that always returns "Hello World".
 * @returns {Function} A function that returns "Hello World" regardless of the arguments passed.
 */
function createHelloWorld() {
  /**
   * Inner function that always returns "Hello World".
   * @returns {string} The string "Hello World".
   */
  return function() {
    return "Hello World";
  };
}

// Example usage:
const f = createHelloWorld();
console.log(f()); // Output: "Hello World"
console.log(f({}, null, 42)); // Output: "Hello World"
