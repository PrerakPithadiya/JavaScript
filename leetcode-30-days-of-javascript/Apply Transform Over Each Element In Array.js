/**
 * Applies a given function to each element of an array and returns a new array with the results.
 * 
 * @param {Array} arr - The input array to be transformed.
 * @param {Function} fn - The function to apply to each element of the array.
 * @returns {Array} A new array with the results of applying the function to each element.
 */
function map(arr, fn) {
  const result = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i], i);
  }
  return result;
}

// Example 1: Adding 1 to each element
let arr1 = [1, 2, 3];
let fn1 = function plusone(n) {
  return n + 1;
};
console.log(map(arr1, fn1)); // Output: [2, 3, 4]

// Example 2: Adding the index to each element
let arr2 = [1, 2, 3];
let fn2 = function plusI(n, i) {
  return n + i;
};
console.log(map(arr2, fn2)); // Output: [1, 3, 5]

// Example 3: Replacing each element with a constant value
let arr3 = [10, 20, 30];
let fn3 = function constant() {
  return 42;
};
console.log(map(arr3, fn3)); // Output: [42, 42, 42]
