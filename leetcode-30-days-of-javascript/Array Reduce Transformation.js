/**
 * Reduces an array to a single value using a provided reducer function.
 * @param {number[]} nums - The input array of numbers.
 * @param {Function} fn - The reducer function that takes two parameters:
 *                        - accum: The accumulated value.
 *                        - curr: The current value from the array.
 * @param {number} init - The initial value for the accumulator.
 * @returns {number} The final accumulated value.
 */
function reduce(nums, fn, init) {
  let result = init;
  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]);
  }
  return result;
}

// Example 1: Sum of all numbers in the array
let nums1 = [1, 2, 3, 4];
let fn1 = function sum(accum, curr) {
  return accum + curr;
};
let init1 = 0;
console.log(reduce(nums1, fn1, init1)); // Output: 10

// Example 2: Sum of squares of all numbers in the array, starting from 100
let nums2 = [1, 2, 3, 4];
let fn2 = function sum(accum, curr) {
  return accum + curr * curr;
};
let init2 = 100;
console.log(reduce(nums2, fn2, init2)); // Output: 130

// Example 3: Reduce an empty array
let nums3 = [];
let fn3 = function sum(accum, curr) {
  return 0;
};
let init3 = 25;
console.log(reduce(nums3, fn3, init3)); // Output: 25
