/**
 * Creates a counter function that starts from a given initial value.
 * 
 * @param {number} n - The initial value of the counter.
 * @returns {function(): number} A function that returns the current count and increments it.
 */
function createCounter(n) {
  return function() {
    return n++;
  };
}

// Example usage:
const counter = createCounter(10);
console.log(counter()); // Output: 10
console.log(counter()); // Output: 11
console.log(counter()); // Output: 12
