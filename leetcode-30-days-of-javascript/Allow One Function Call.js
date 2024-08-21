/**
 * Creates a function that can only be called once.
 * Subsequent calls to the returned function will return undefined.
 *
 * @param {Function} fn - The function to be wrapped.
 * @returns {Function} A new function that can only be called once.
 */
function once(fn) {
  let called = false;
  let result;

  /**
   * @param {...*} args - The arguments to be passed to the original function.
   * @returns {*} The result of the first call to the function, or undefined for subsequent calls.
   */
  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
      return result;
    }
    return undefined;
  };
}

// Example 1: Using 'once' with an addition function
const fn1 = (a, b, c) => a + b + c;
const onceFn1 = once(fn1);

console.log(onceFn1(1, 2, 3)); // Output: 6
console.log(onceFn1(2, 3, 6)); // Output: undefined

// Example 2: Using 'once' with a multiplication function
const fn2 = (a, b, c) => a * b * c;
const onceFn2 = once(fn2);

console.log(onceFn2(5, 7, 4)); // Output: 140
console.log(onceFn2(2, 3, 6)); // Output: undefined
console.log(onceFn2(4, 6, 8)); // Output: undefined
