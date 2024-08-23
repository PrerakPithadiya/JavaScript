/**
 * Creates an expectation object for a given value.
 * @param {*} val - The value to be tested.
 * @returns {Object} An object with toBe and notToBe methods.
 */
const expect = function(val) {
  return {
    /**
     * Checks if the value is equal to the expected value.
     * @param {*} expected - The expected value.
     * @returns {boolean} True if the values are equal.
     * @throws {Error} If the values are not equal.
     */
    toBe(expected) {
      if (val === expected) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },

    /**
     * Checks if the value is not equal to the expected value.
     * @param {*} expected - The expected value.
     * @returns {boolean} True if the values are not equal.
     * @throws {Error} If the values are equal.
     */
    notToBe(expected) {
      if (val !== expected) {
        return true;
      } else {
        throw new Error("Equal");
      }
    }
  };
};

// Function calls
expect(5).toBe(5); // true
expect(5).notToBe(6); // true
try {
  expect(5).toBe(6);
} catch (error) {
  console.log(error.message); // "Not Equal"
}

try {
  expect(5).notToBe(5);
} catch (error) {
  console.log(error.message); // "Equal"
}
