/**
 * Flattens a deeply nested array to a specified depth.
 * 
 * @param {Array} arr - The input array to be flattened.
 * @param {number} depth - The maximum depth to flatten the array.
 * @returns {Array} The flattened array.
 */
function flattenArray(arr, depth) {
  /**
   * Helper function to recursively flatten the array.
   * 
   * @param {Array} arr - The array to be flattened.
   * @param {number} currentDepth - The current depth of flattening.
   * @returns {Array} The flattened array at the current depth.
   */

  function flatten(inputArr, currentDepth) {
    // Base case: if depth is 0, return the array as is
    if (currentDepth === 0) {
      return inputArr.slice(); // return a shallow copy of the array
    }

    // Result array
    const result = [];

    // Iterate over the elements of the array
    for (const element of inputArr) {
      if (Array.isArray(element)) {
        // Recursively flatten the sub-array if depth > 0
        result.push(...flatten(element, currentDepth - 1));
      } else {
        // Add non-array elements directly to result
        result.push(element);
      }
    }

    return result;
  }

  // Start the flattening process
  return flatten(arr, depth);
}

// Example Usage
flattenArray([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0);
// Output: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

flattenArray([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

flattenArray([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// Note: To view the results, you can use a method other than console.log
// that is appropriate for your specific environment or testing framework.
