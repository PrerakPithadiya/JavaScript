/**
 * Chunks an array into smaller arrays of a specified size.
 *
 * @param {Array} arr - The input array to be chunked.
 * @param {number} size - The size of each chunk.
 * @returns {Array} An array of chunked arrays.
 *
 * @description
 * This function takes an input array and divides it into smaller arrays (chunks)
 * of a specified size. If the array can't be split evenly, the last chunk will
 * contain the remaining elements.
 *
 * @example
 * chunkArray([1, 2, 3, 4, 5], 2);
 * // Returns: [[1, 2], [3, 4], [5]]
 *
 * @example
 * chunkArray([1, 2, 3, 4, 5, 6], 3);
 * // Returns: [[1, 2, 3], [4, 5, 6]]
 *
 * @example
 * chunkArray([], 1);
 * // Returns: []
 */
function chunkArray(arr, size) {
  const result = [];

  // Iterate through the array
  for (let i = 0; i < arr.length; i += size) {
    // Slice the array from index i to i + size
    result.push(arr.slice(i, i + size));
  }

  return result;
}

// Example usage
chunkArray([1, 2, 3, 4, 5], 1); // [[1],[2],[3],[4],[5]]
chunkArray([1, 9, 6, 3, 2], 3); // [[1,9,6],[3,2]]
chunkArray([8, 5, 3, 2, 6], 6); // [[8,5,3,2,6]]
chunkArray([], 1); // []
