/**
 * Composes an array of functions into a single function.
 * The functions are applied from right to left.
 * 
 * @param {Function[]} functions - An array of functions to compose
 * @returns {Function} A new function that is the composition of the input functions
 */
function compose(functions) {
  /**
   * The composed function that applies all the input functions in reverse order
   * 
   * @param {*} x - The initial input value
   * @returns {*} The result after applying all functions
   */
  return function(x) {
    let result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
}

/**
 * Example 1: Composing three functions
 * 
 * @description
 * This example demonstrates composing three functions:
 * 1. x => x + 1 (adds 1 to the input)
 * 2. x => x * x (squares the input)
 * 3. x => 2 * x (doubles the input)
 * 
 * The functions are applied from right to left, so the order of operations is:
 * 1. Double the input (4 * 2 = 8)
 * 2. Square the result (8 * 8 = 64)
 * 3. Add 1 to the final result (64 + 1 = 65)
 */
let functions1 = [x => x + 1, x => x * x, x => 2 * x];
let x1 = 4;
let composedFunction1 = compose(functions1);
console.log(composedFunction1(x1)); // Output: 65

/**
 * Example 2: Composing three identical functions
 * 
 * @description
 * This example shows the composition of three identical functions,
 * each multiplying the input by 10. The result is equivalent to
 * multiplying the input by 1000 (10 * 10 * 10).
 */
let functions2 = [x => 10 * x, x => 10 * x, x => 10 * x];
let x2 = 1;
let composedFunction2 = compose(functions2);
console.log(composedFunction2(x2)); // Output: 1000

/**
 * Example 3: Composing an empty array of functions
 * 
 * @description
 * This example demonstrates that when an empty array is passed to the compose function,
 * the resulting composed function acts as an identity function, returning the input unchanged.
 */
let functions3 = [];
let x3 = 42;
let composedFunction3 = compose(functions3);
console.log(composedFunction3(x3)); // Output: 42
