/**
 * Filters elements from an array based on a given callback function.
 *
 * @param {Array} arr - The input array to be filtered.
 * @param {Function} fn - The callback function used to test each element.
 * @returns {Array} A new array containing the elements that pass the test.
 */
function filter(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Example 1: Filter elements greater than 10
let arr1 = [0, 10, 20, 30];
let fn1 = function greaterThan10(n) {
  return n > 10;
};
console.log(filter(arr1, fn1)); // Output: [20, 30]

// Example 2: Filter only the first element
let arr2 = [1, 2, 3];
let fn2 = function firstIndex(n, i) {
  return i === 0;
};
console.log(filter(arr2, fn2)); // Output: [1]

// Example 3: Filter elements where n + 1 is truthy
let arr3 = [-2, -1, 0, 1, 2];
let fn3 = function plusOne(n) {
  return n + 1;
};
console.log(filter(arr3, fn3)); // Output: [-2, 0, 1, 2]
