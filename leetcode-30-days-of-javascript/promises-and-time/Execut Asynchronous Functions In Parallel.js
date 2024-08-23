/**
 * Custom promiseAll function that executes an array of asynchronous functions in parallel.
 * 
 * This function mimics the behavior of Promise.all() but with additional error handling and validation.
 * 
 * @param {Array<Function>} functions - An array of functions that return promises.
 * @return {Promise<Array>} - A promise that resolves with an array of results or rejects with the first encountered error.
 * 
 * @throws {Error} If any function in the array does not return a promise.
 * 
 * @example
 * const asyncFunctions = [
 *   () => new Promise(resolve => setTimeout(() => resolve(1), 1000)),
 *   () => new Promise(resolve => setTimeout(() => resolve(2), 500)),
 *   () => new Promise(resolve => setTimeout(() => resolve(3), 1500))
 * ];
 * promiseAll(asyncFunctions).then(console.log); // [1, 2, 3]
 * 
 * @description
 * The function works as follows:
 * 1. It returns a new Promise.
 * 2. If the input array is empty, it immediately resolves with an empty array.
 * 3. For each function in the input array:
 *    - It calls the function and expects a Promise to be returned.
 *    - If the function doesn't return a Promise, it throws an error.
 *    - It attaches .then() and .catch() handlers to each Promise.
 * 4. As each Promise resolves, its result is stored in the results array at the correct index.
 * 5. If all Promises resolve successfully, the function resolves with the array of results.
 * 6. If any Promise rejects, the function immediately rejects with that error.
 * 7. A flag (isRejected) is used to ensure only the first rejection is processed.
 * 
 * @note
 * - The function preserves the order of results, matching the order of input functions.
 * - Error handling includes both Promise rejections and synchronous errors during function execution.
 */
function _promiseAll(functions) {
  return new Promise((resolve, reject) => {
    if (functions.length === 0) {
      return resolve([]); // Handle empty array case
    }

    const results = [];
    let resolvedCount = 0;
    const total = functions.length;
    let isRejected = false; // Flag to prevent multiple rejections

    functions.forEach((fn, index) => {
      try {
        const promise = fn();

        if (!(promise instanceof Promise)) {
          // Handle case where fn does not return a promise
          throw new Error(
            `Function at index ${index} did not return a promise`
          );
        }

        promise
          .then(value => {
            if (isRejected) return; // If already rejected, do nothing
            results[index] = value;
            resolvedCount += 1;

            if (resolvedCount === total) {
              resolve(results); // Resolve when all promises have resolved
            }
          })
          .catch(error => {
            if (isRejected) return; // If already rejected, do nothing
            isRejected = true;
            reject(error); // Reject immediately on first error
          });
      } catch (error) {
        if (isRejected) return; // If already rejected, do nothing
        isRejected = true;
        reject(error); // Reject if function execution throws an error
      }
    });
    return null;
  });
}
