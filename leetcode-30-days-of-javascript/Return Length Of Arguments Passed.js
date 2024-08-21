/**
 * Returns the length of the arguments passed to the function.
 *
 * This function uses the rest parameter syntax to capture all arguments
 * passed to it into an array, then returns the length of that array.
 *
 * @param {...*} args - Any number of arguments of any type.
 * @returns {number} The number of arguments passed to the function.
 *
 * @example
 * argumentsLength(5); // Returns 1
 * argumentsLength({}, null, "3"); // Returns 3
 * argumentsLength(); // Returns 0
 */
function argumentsLength(...args) {
  return args.length;
}

// Example 1: Single argument
console.log(argumentsLength(5)); // Output: 1

// Example 2: Multiple arguments of different types
console.log(argumentsLength({}, null, "3")); // Output: 3

// Example 3: No arguments
console.log(argumentsLength()); // Output: 0
