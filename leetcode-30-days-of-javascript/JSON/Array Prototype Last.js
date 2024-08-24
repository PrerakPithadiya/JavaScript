/**
 * Array Prototype Extension: last()
 * 
 * This extension adds a 'last' method to the Array prototype, allowing all arrays
 * to easily retrieve their last element or determine if they are empty.
 * 
 * @returns {*|number} The last element of the array, or -1 if the array is empty.
 * 
 * @example
 * const nums = [1, 2, 3];
 * console.log(nums.last()); // Output: 3
 * 
 * const emptyArray = [];
 * console.log(emptyArray.last()); // Output: -1
 */
Array.prototype.last = function() {
  // Check if the array is empty
  if (this.length === 0) {
    return -1;
  }
  // Return the last element
  return this[this.length - 1];
};

// Examples
const nums1 = [null, {}, 3];
console.log(nums1.last()); // Output: 3

const nums2 = [];
console.log(nums2.last()); // Output: -1

/**
 * Additional Notes:
 * 
 * 1. Extending built-in prototypes should be done with caution as it can lead to
 *    naming conflicts or unexpected behavior in large codebases or when using external libraries.
 * 
 * 2. This implementation assumes that -1 is a valid return value to indicate an empty array.
 *    Depending on the use case, throwing an error or returning undefined might be more appropriate.
 * 
 * 3. The method works with arrays of any data type, including arrays containing null, undefined,
 *    or object references.
 * 
 * 4. Time Complexity: O(1) - Constant time operation regardless of array size.
 * 
 * 5. Space Complexity: O(1) - No additional space is used regardless of input size.
 */
