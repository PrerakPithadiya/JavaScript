/**
 * @file Join Two Arrays By ID
 * @description This module provides a function to merge two arrays of objects based on their 'id' field.
 * @module mergeArrays
 */

/**
 * Merges two arrays of objects based on their 'id' field.
 * @function mergeArrays
 * @param {Object[]} arr1 - The first array of objects.
 * @param {Object[]} arr2 - The second array of objects.
 * @return {Object[]} - The merged and sorted array of objects.
 * 
 * @example
 * let arr1 = [{ id: 1, x: 1 }, { id: 2, x: 9 }];
 * let arr2 = [{ id: 3, x: 5 }];
 * mergeArrays(arr1, arr2);
 * // Returns: [{"id": 1, "x": 1}, {"id": 2, "x": 9}, {"id": 3, "x": 5}]
 * 
 * @example
 * let arr1 = [{ id: 1, x: 2, y: 3 }, { id: 2, x: 3, y: 6 }];
 * let arr2 = [{ id: 2, x: 10, y: 20 }, { id: 3, x: 0, y: 0 }];
 * mergeArrays(arr1, arr2);
 * // Returns: [{"id": 1, "x": 2, "y": 3}, {"id": 2, "x": 10, "y": 20}, {"id": 3, "x": 0, "y": 0"}]
 * 
 * @example
 * let arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
 * let arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];
 * mergeArrays(arr1, arr2);
 * // Returns: [{"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}]
 */
function mergeArrays(arr1, arr2) {
  // Create a map to hold merged objects by their id
  const map = new Map();

  /**
   * Helper function to merge objects
   * @param {Object} obj - The object to be merged
   */
  const merge = obj => {
    const id = obj.id;
    if (map.has(id)) {
      // Merge current object with existing one in the map
      Object.assign(map.get(id), obj);
    } else {
      // Add new object to the map
      map.set(id, { ...obj });
    }
  };

  // Process both arrays
  arr1.forEach(merge);
  arr2.forEach(merge);

  // Convert the map values to an array and sort by id
  const result = Array.from(map.values()).sort((a, b) => a.id - b.id);

  return result;
}

// Example Usage
let arr1 = [{ id: 1, x: 1 }, { id: 2, x: 9 }];
let arr2 = [{ id: 3, x: 5 }];
console.log(mergeArrays(arr1, arr2));
// Output: [{"id": 1, "x": 1}, {"id": 2, "x": 9}, {"id": 3, "x": 5}]

arr1 = [{ id: 1, x: 2, y: 3 }, { id: 2, x: 3, y: 6 }];
arr2 = [{ id: 2, x: 10, y: 20 }, { id: 3, x: 0, y: 0 }];
console.log(mergeArrays(arr1, arr2));
// Output: [{"id": 1, "x": 2, "y": 3}, {"id": 2, "x": 10, "y": 20}, {"id": 3, "x": 0, "y": 0"}]

arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];
console.log(mergeArrays(arr1, arr2));
// Output: [{"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}]
