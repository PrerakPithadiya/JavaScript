/**
 * Checks if the given object or array is empty.
 *
 * @param {Object|Array} obj - The object or array to check.
 * @returns {boolean} Returns true if the object or array is empty, false otherwise.
 *
 * @description
 * This function determines whether the provided input is empty based on its type:
 * - For arrays: Checks if the length is 0.
 * - For objects: Checks if it has no enumerable own properties.
 * - For other types: Considers them not empty.
 *
 * @example
 * isEmpty({}); // true
 * isEmpty([]); // true
 * isEmpty({ x: 5, y: 42 }); // false
 * isEmpty([null, false, 0]); // false
 * isEmpty(null); // false
 * isEmpty("string"); // false
 */
function isEmpty(obj) {
  if (Array.isArray(obj)) {
    // Check if array length is 0
    return obj.length === 0;
  } else if (typeof obj === "object" && obj !== null) {
    // Check if object has no enumerable own properties
    return Object.keys(obj).length === 0;
  }
  return false; // For cases where obj is neither an array nor an object, consider it not empty
}

// Example usage:
isEmpty({ x: 5, y: 42 }); // false
isEmpty({}); // true
isEmpty([null, false, 0]); // false
isEmpty([]); // true
isEmpty(null); // false
isEmpty("string"); // false
