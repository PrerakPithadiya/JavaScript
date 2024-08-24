/**
 * @file Sort By.js
 * @description This file contains a function to sort an array based on a provided comparison function.
 */

/**
 * Sorts the array based on the values returned by the function fn.
 * 
 * @param {Array} arr - The array to be sorted.
 * @param {Function} fn - The function used to determine the sort order.
 * @return {Array} - The sorted array.
 * 
 * @example
 * const arr = [5, 4, 1, 2, 3];
 * const fn = x => x;
 * sortByFn(arr, fn); // Returns: [1, 2, 3, 4, 5]
 * 
 * @example
 * const arr = [{ x: 1 }, { x: 0 }, { x: -1 }];
 * const fn = d => d.x;
 * sortByFn(arr, fn); // Returns: [{"x": -1}, {"x": 0}, {"x": 1}]
 * 
 * @example
 * const arr = [[3, 4], [5, 2], [10, 1]];
 * const fn = x => x[1];
 * sortByFn(arr, fn); // Returns: [[10, 1], [5, 2], [3, 4]]
 */
function sortByFn(arr, fn) {
  return arr.sort((a, b) => {
    // Compare based on the values returned by fn
    return fn(a) - fn(b);
  });
}

// Example Usage
const arr1 = [5, 4, 1, 2, 3];
const fn1 = x => x;
// Output: [1, 2, 3, 4, 5]

const arr2 = [{ x: 1 }, { x: 0 }, { x: -1 }];
const fn2 = d => d.x;
// Output: [{"x": -1}, {"x": 0}, {"x": 1}]

const arr3 = [[3, 4], [5, 2], [10, 1]];
const fn3 = x => x[1];
// Output: [[10, 1], [5, 2], [3, 4]]
