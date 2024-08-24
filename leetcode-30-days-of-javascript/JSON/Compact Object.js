/**
 * Compacts an object or array by removing falsy values.
 * 
 * This function recursively processes the input, removing falsy values (null, undefined, 0, false, NaN, and empty string)
 * from arrays and objects. For arrays, it filters out falsy values and for objects, it removes properties with falsy values.
 * 
 * @param {*} obj - The input object or array to compact.
 * @returns {*} A new object or array with falsy values removed.
 */
/**
 * Helper function to recursively process arrays and objects.
 * 
 * @param {*} value - The value to process.
 * @returns {*} The processed value with falsy values removed.
 */
function removeFalsy(value) {
  if (Array.isArray(value)) {
    // Process each element in the array
    const result = value.map(removeFalsy).filter(item => item !== undefined);
    return result.length > 0 ? result : [];
  } else if (typeof value === "object" && value !== null) {
    // Process each property in the object
    const result = {};
    for (const [key, val] of Object.entries(value)) {
      const processedValue = removeFalsy(val);
      if (processedValue !== undefined) {
        result[key] = processedValue;
      }
    }
    return Object.keys(result).length > 0 ? result : {};
  } else {
    // Return value if it's not falsy
    return value ? value : undefined;
  }
}

function _compact(obj) {
  return removeFalsy(obj);
}

// Example Usage
// Note: Console logging is used here for demonstration purposes.
// In a production environment, consider using appropriate logging mechanisms.
// console.log(compact([null, 0, false, 1]));
// Output: [1]

// console.log(compact({ a: null, b: [false, 1] }));
// Output: {"b": [1]}

// console.log(compact([null, 0, 5, [0], [false, 16]]));
// Output: [5, [], [16]]
