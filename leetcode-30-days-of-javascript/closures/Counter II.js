/**
 * Creates a counter object with increment, decrement, and reset functionality.
 * @param {number} init - The initial value of the counter.
 * @returns {Object} An object with three methods:
 *   - increment(): Increases the counter value by 1 and returns the new value.
 *   - decrement(): Decreases the counter value by 1 and returns the new value.
 *   - reset(): Resets the counter to its initial value and returns it.
 */
var createCounter = function(init) {
  let currentValue = init;

  return {
    /**
     * Increments the counter value by 1.
     * @returns {number} The new counter value after incrementing.
     */
    increment: function() {
      return ++currentValue;
    },

    /**
     * Decrements the counter value by 1.
     * @returns {number} The new counter value after decrementing.
     */
    decrement: function() {
      return --currentValue;
    },

    /**
     * Resets the counter to its initial value.
     * @returns {number} The initial counter value.
     */
    reset: function() {
      currentValue = init;
      return currentValue;
    }
  };
};

// Create a counter instance
const counter = createCounter(5);

// Call the functions
console.log(counter.increment()); // Output: 6
console.log(counter.increment()); // Output: 7
console.log(counter.decrement()); // Output: 6
console.log(counter.reset()); // Output: 5
console.log(counter.decrement()); // Output: 4
